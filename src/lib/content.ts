export const SITE = {
  title: "Arınma",
  tagline: "Onları suda boğduk…",
  quoteAr: "أغرقناهم في الماء...",
  quoteTr: "Onları suda boğduk…",
  release: "11 Eylül",
  production: "Zey Medya Film & BGM Production",
  distribution: "MC Film",
};

export const SYNOPSIS =
  "Eşi Ceren'in temizlik takıntısının bir büyüden kaynaklandığını anlayan Mert'in, büyüyü bozmak amacıyla lise arkadaşı Fırat ve eşini evlerine davet etmesiyle başlayan gerilimli süreç anlatılmaktadır.";

export const DIRECTOR_LEAD =
  "Oyunculuktan yönetmenliğe, yönetmenlikten yapımcılığa uzanan sinema yolculuğunda yeni bir adım atıyorum, yönetmenliğini ve yapımcılığını üstlendiğim “Arınma”, 11 Eylül’de sinemaseverlerle buluşmak için de sabırsızlanıyorum.";

export const DIRECTOR_QUOTE =
  "Oyunculuk benim için sinemaya açılan ilk kapıydı. 2012 yılında başladığım bu yolculukta kendime hep ‘Ben bu işi öğreneceğim’ dedim. Zaman içerisinde kameranın diğer tarafında olmayı, yönetmenlik alanında kendimi geliştirmeyi ve kendi dünyamı anlatabilmeyi istedim. Bunun için çok çalıştım. ‘Arınma’ benim için yalnızca bir yönetmenlik deneyimi değil, aynı zamanda yapımcılığı da deneyimlediğim önemli bir çalışma oldu. Kamera önünde başlayan yolculuğumu kamera arkasında sürdürmek ve bir filmin yapım sürecinin farklı aşamalarında sorumluluk almak benim için çok değerli. Şimdi en büyük heyecanımız, ‘Arınma’yı seyirciyle buluşturmak.";

export const CREW = [
  { role: "Yönetmen", name: "Beytullah Pekok" },
  { role: "Senarist", name: "Bektaş Topaloğlu" },
  { role: "Görüntü Yönetmeni", name: "Fatma Nur Pekok" },
  { role: "Yapımcı", name: "Bektaş Topaloğlu & Beytullah Pekok" },
  { role: "Yapım", name: "Zey Medya Film" },
  { role: "Yapım Ortaklığı", name: "BGM Production" },
  { role: "Dağıtım", name: "MC Film" },
  { role: "Yapım Koordinatörü", name: "Asım Kaçmaz" },
] as const;

export const CAST = [
  "Alya Gizem Turan",
  "Mihriban Başara",
  "Fatih Şahin",
  "Mehmet Gümüş",
] as const;

export const NAV = [
  { href: "#fragman", label: "Fragman" },
  { href: "#film", label: "Film" },
  { href: "#yonetmen", label: "Yönetmen" },
  { href: "#ekip", label: "Ekip" },
  { href: "#oyuncular", label: "Oyuncular" },
  { href: "#galeri", label: "Galeri" },
] as const;

export const DIRECTOR_PHOTOS = [
  { src: "/director/01.jpg", alt: "Beytullah Pekok, set üzerinde kamera ile" },
  { src: "/director/03.jpg", alt: "Beytullah Pekok, dış çekimde" },
  { src: "/director/04.jpg", alt: "Beytullah Pekok, kamera arkasında" },
  { src: "/director/05.jpg", alt: "Beytullah Pekok, yönetmen portresi" },
] as const;

export const GALLERY = Array.from({ length: 27 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/gallery/${n}.jpg`,
    alt: `Arınma set görüntüsü ${i + 1}`,
  };
});
