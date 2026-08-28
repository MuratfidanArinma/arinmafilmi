from pathlib import Path
from shutil import copy2
from PIL import Image

src_root = Path(r"C:\Users\emreg\Downloads\wetransfer_arinma-web_2026-08-28_1532\Arınma Web")
photos = src_root / "Arınma Resimler" / "Resimler"
poster_src = src_root / "Senaryo Kopyası.png"
video_src = src_root / "teaser123.mp4"
pdf_page = Path(r"C:\Users\emreg\Projects\profit-bots\spoyit\.arinma-brief\pages\page-01.png")

public = Path(r"C:\Users\emreg\Projects\profit-bots\arinma\public")
gallery = public / "gallery"
director = public / "director"
video = public / "video"
for d in (gallery, director, video):
    d.mkdir(parents=True, exist_ok=True)

skip = {"IMG-20260814-WA0013.jpg"}  # Instagram UI overlay

def save_jpeg(im: Image.Image, dest: Path, max_side: int, quality: int) -> None:
    im = im.convert("RGB")
    im.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=quality, optimize=True, progressive=True)

# Poster (17MB PNG -> web JPEG)
poster = Image.open(poster_src)
save_jpeg(poster, public / "poster.jpg", 2200, 88)
print("poster", (public / "poster.jpg").stat().st_size)

# Hero still from PDF page if poster copy is same
if pdf_page.exists():
    save_jpeg(Image.open(pdf_page), public / "poster-page.jpg", 1600, 85)

# Favicon crop from poster center-top title area
w, h = poster.size
title = poster.crop((int(w * 0.18), int(h * 0.02), int(w * 0.82), int(h * 0.18)))
title.convert("RGB").resize((512, 180), Image.Resampling.LANCZOS).save(
    public / "title-mark.jpg", "JPEG", quality=90
)
face = poster.crop((int(w * 0.22), int(h * 0.16), int(w * 0.78), int(h * 0.58)))
face.convert("RGB").resize((256, 256), Image.Resampling.LANCZOS).save(
    public / "icon.jpg", "JPEG", quality=85
)

copy2(video_src, video / "teaser.mp4")
print("video copied", (video / "teaser.mp4").stat().st_size)

director_map = {
    "IMG-20260814-WA0008.jpg": "01.jpg",
    "IMG-20260814-WA0009.jpg": "02.jpg",
    "IMG-20260814-WA0011.jpg": "03.jpg",
    "IMG-20260814-WA0024.jpg": "04.jpg",
    "IMG-20260814-WA0033.jpg": "05.jpg",
    "IMG-20260814-WA0007.jpg": "06.jpg",
}
for src_name, dest_name in director_map.items():
    save_jpeg(Image.open(photos / src_name), director / dest_name, 1600, 86)

files = sorted(p for p in photos.glob("IMG-*.jpg") if p.name not in skip)
manifest = []
for i, p in enumerate(files, start=1):
    dest = gallery / f"{i:02d}.jpg"
    save_jpeg(Image.open(p), dest, 1800, 84)
    manifest.append({"file": f"/gallery/{i:02d}.jpg", "src": p.name})
    print(f"gallery {dest.name} <- {p.name}")

(public / "gallery-manifest.json").write_text(
    __import__("json").dumps(manifest, ensure_ascii=False, indent=2),
    encoding="utf-8",
)
print("done", len(files), "gallery images")
