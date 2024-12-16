
// console.log("selam ben js öğreniyorum!") //console alanına bir mesaj vermek için kullanılır

//!DEĞİŞKENLER
//*içerisinde datalar(veriler) 'ın tutulduğu alanlardır
//*değişekenler let,var veya const'larla oluşturulur

// let isim = "mehmet" //metinsel karakter (string)
// console.log(isim)

// let yas = 25 //sayısal karakter (number)
// console.log(yas)

//?değişken oluşturma kuralları!
//*1)değişken sayısal ifade ile başlayamaz
// let 1mehmet = "mehmet" => !hata
// let isim1 = "mehmet"
// let isim2 = "rojin"

//*2)değişkenler arasına boşluk bırakılmaz!
// let isim soysisim = "mehmet coban" => !hata

// let isimsoyisim = "mehmet coban"
// console.log(isimsoyisim);

// let benimAdimSoyadim = "mehmet coban"

// let isim_soyisim = "mehmet coban"
// console.log(isim_soyisim);

//*3)değişkenlerde türkçe karakter kullanılamz!
// let benimAdımSoyadım = "mehmet çoban"
// console.log(benimAdımSoyadım);

//?VAROLAN BİR DEĞİŞKEN YENİDEN OLUŞTURULAMAZ! (GÜNCELLENEBİLİR)
// let isim = "mehmet"
// let isim = "burak" //hata!
// console.log(isim);

// let isim = "mehmet"
// console.log(isim);

// isim = "burak"
// console.log(isim);


// let kullaniciAdi = "mehmetcoban"
// console.log(kullaniciAdi);

// kullaniciAdi = "mehmet.jsx"
// console.log(kullaniciAdi);


//?veri türleri
//*string,number,array(dizin),obje,boolean,undefined,null

// let isim = "mehmet" //stiring değişken
// let dogumYili = 1999 //number değişken


// let isim = "mehmet"
// let soyisim = "coban"
// console.log(isim + soyisim)


// let sayi1 = 10
// let sayi = 20
// console.log(sayi + sayi1);


//*string => (metinsel veri tipleri. "" içerisinde belirtilir)

// let isim = "mehmet"
// let soyisim = "coban"
// let isim2 = "burak"
// let sifre = "1a2b3c"

// console.log(isim)
// console.log(sifre)


//*number => (sayısal veri tipleridir. Doğrusan sayı olarak belirtilir)

// let paraMiktari = 1500
// let maas = 50000
// console.log(paraMiktari);


// console.log(typeof sifre)
// console.log(typeof maas)
//?typeof => değişkenin tipini verir


//*array => (toplu datalar oluşturabileceğimiz bir alandır (index numaraları barındır))

// let iller = ["istanbul", "izmir", "bursa", "diyarbakır", "ankara"]
// console.log(iller);

// //?arraydan data çekmek
// console.log(iller[2])

//*object => (key:value mantığı ile değişkene özellikler verebilme yeteneği sunar)

// let araba = {
//     renk: "kırmızı",
//     km: 15000,
//     fiyat: 100000,
//     motor: "1.6",
// }

// console.log(araba.fiyat)
// console.log(araba.renk)
// console.log(araba.motor)

//*boolean => (true / false değerlerini alarak bizim için doğru yada yanlış ifadesini verir)

// let isler = false
// let askerlik = false
// console.log(isler);

// let araba = {
//     renk: "kırmızı",
//     km: 15000,
//     fiyat: 100000,
//     motor: "1.6",
//     muayne: true,
//     kazalı: false
// }

// console.log(araba.muayne, araba.kazalı);



// let araba = {
//     renk: "kırmızı",
//     km: 15000,
//     fiyat: 100000,
//     motor: "1.6",
//     muayne: true,
//     kazalı: false
// }
// let araba2 = {
//     renk: "mavi",
//     km: 10000,
//     fiyat: 200000,
//     motor: "2.0",
//     muayne: true,
//     kazalı: false
// }


// console.log(araba,araba2)


// ?doğru kullanım!

// let arabalar = [
//     {
//         marka: "renault",
//         model: "clio",
//         renk: "kırmızı",
//         km: 15000,
//         fiyat: 100000,
//         motor: "1.6",
//         muayne: true,
//         kazalı: false
//     },
//     {
//         marka: "x",
//         model: "y",
//         renk: "kırmızı",
//         km: 15000,
//         fiyat: 100000,
//         motor: "1.6",
//         muayne: true,
//         kazalı: false
//     },
//     {
//         marka: "z",
//         model: "c",
//         renk: "beyaz",
//         km: 100,
//         fiyat: 600000,
//         motor: "1.3",
//         muayne: false,
//         kazalı: false
//     },
// ]

// console.log(arabalar[0].km);


// *undefined (çağırılan değişkenin bulunamaması/karşılığı olmaması)

// let telefon = {
//     marka: "iphone",
//     model: "14pro",
//     ram: 16,
//     disk: 256,
//     renk: "beyaz"
// }

// console.log(telefon.ekran);

// let ornekNull = null
// console.log(ornekNull);

// !VERİ YAZDIRMA YÖNTEMLERİ
// ?console.log() => (genelde bizler bu yöntemi hata ayıklamak için kullanırız)

// console.log("selamlar!")

// ?alert() => (webin sistem mesajı anlamına gelir)
// alert("selam siteme hoşgeldin!")

// ?document.write() => (html içerisinde doğrudan mesaj verir)
// document.write("Selam js ile html mesaj yazdırdım")


// *değişkenleri ekrana yazarken önemli bir yöntem kullanılırz (backtick)

// let isim = "mehmet"
// let gunMesaji = "İyi Akşamlar"

// console.log(gunMesaji + " " + isim)


// let isim = "mehmet"
// let soyisim = "coban"
// let yas = 25
// let gunMesaji = "İyi Akşamlar"

// console.log(gunMesaji + " " + isim + " " + "Soyadınız :" + " " + soyisim + " " + "Yaşınız :" + " " + yas);

// ?backtick kullanımı
// console.log(`${gunMesaji} ${isim} Soyadınız :${soyisim} Yaşınız :${yas}`)


// !ARİTMETİK OPERATÖRLER
// * + , - , * , / , % , **

// let sayi1 = 10
// let sayi2 = 50
// let sonuc = sayi1 + sayi2

// console.log(`İki Sayının Toplamı : ${sonuc}`)

// let sayi1 = 10
// let sayi2 = 50
// let sonuc = sayi1 - sayi2

// console.log(`İki Sayının Farkı : ${sonuc}`)

// let sayi1 = 10
// let sayi2 = 50
// let sonuc = sayi1 * sayi2

// console.log(`İki Sayının Çarpımı : ${sonuc}`)


// console.log(10 % 3) //=> mod alma bizim için sayıyı böler ve kalanını verir

// console.log(2 ** 3) //=> 2* 2* 2 => 8 (üssü almaya yarar)


// let isim = "mehmet"
// let soyisim = 10
// console.log(isim - soyisim); // NaN => not a number (sayısal bir ifade olmadığı için bu hata verilir)


// * ++ (sayıyı bir arttırma)
// * -- (sayıyı bir azaltma)

// let sayi = 10
// sayi++
// console.log(sayi)

// let say2 = 25
// say2--
// console.log(say2)


// ?alternatif kullanımlar

// let skor = 0
// skor = skor + 3 // skor += 3
// console.log(skor);

// let newSkor = 0
// newSkor -= 5
// newSkor -= 5
// console.log(newSkor);

// !PROMPTLAR => (kullanıcıdan datalar almak için sorular sorudur (girdi alınır))
// *ÖNEMLİ KURAL => PROMPTLARDAN GELEN DEĞERLERİN TİPLERİ HERZAMAN STRİNG BİR DEĞERDEDİR
// let girilenIsim = prompt("Lütfen Adınız Giriniz")
// console.log(`Girilen İsim : ${girilenIsim}. Hoşgeldin! ${girilenIsim}`)

// let girilenSayi = prompt("Lütfen Bir Sayı Giriniz : ")
// console.log(typeof girilenSayi)

// ?promptan alınan değeri number bir ifadeye çevirmek
// *iki farklı alternatif kullanılabilir

// let girilenYas = Number(prompt("Lütfen Yaşınızı Giriniz : "))
// console.log(typeof girilenYas)

// let girilenYas2 = +prompt("Lütfen Yaşınızı Giriniz : ")
// console.log(typeof girilenYas)

// *kullanıcıdan iki fakrlı sayı alınır ve bu iki sayıyı toplayıp ekrana yazdırınız
// *örnek => "${10} ile ${20} sayısının toplamı 30"

// let sayi1 = +prompt("Lütfen 1. Sayıyı Giriniz : ")
// let sayi2 = +prompt("Lütfen 2. Sayıyı Giriniz : ")
// let toplam = sayi1 + sayi2
// console.log(`${sayi1} ile ${sayi2} sayısının toplamı : ${toplam}`);


// *kullanıcıdan 3 adet sınav notu isteyiniz
// *alınan sınav notlarının ortalamasını bulup kullanıcıya versin

// let sinav1 = +prompt("1. Sınavınızı Giriniz : ")
// let sinav2 = +prompt("2. Sınavınızı Giriniz : ")
// let sinav3 = +prompt("3. Sınavınızı Giriniz : ")

// let ortalama = (sinav1 + sinav2 + sinav3) / 3

// console.log(`Sınavlarınızın Ortalaması : ${ortalama}`)
