// console.log("selam ben js öğreniyorum!") //console alanına bir mesaj vermek için kullanılır

//!DEĞİŞKENLER
// var:eski yöntemdir function scopetur
// aynı degişkenler tanımlanabilir


// let:blockscopedur 
// aynı degişkenle tanımlanamaz

// const:block scope dur yeniden tanımlanamaz ve 1kez deger atadıktan sonra degeri degiştirilemez
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


// let kullaniciAdi = "ibrahim kalafat"
// console.log(kullaniciAdi);

// kullaniciAdi = "ibo.jsx"
// console.log(kullaniciAdi);


//?veri türleri
// değiskende saklanabilcek veri türlerini belirtir
//*string,number,array(dizin),obje,boolean,undefined,null

// let isim = "ibrahim" //stiring değişken
// let dogumYili = 1999 //number değişken


// let isim = "ibrahim"
// let soyisim = "kalafat"
// console.log(isim + soyisim)


// let sayi1 = 10
// let sayi = 20
// console.log(sayi + sayi1);