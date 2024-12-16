// let not = 35
// if (not>50) {
//     console.log("geçtiniz " + not);
    
// }else{
//     console.log("kaldınız " + not );
    
// }



// let yas = Number(prompt("yaşınız"));
// let para = Number(prompt("bütçeniz"));
// if (yas>=18 && para>=3000) {
//     console.log("Ehliyete katıldınız");
    
// }else{
//     console.log("ehliyete katılamadınız");
    
// }




// let vize1 = Number(prompt("vize1 notunuzu giriniz"));
// let vize2 = Number(prompt("vize2 notunuzu giriniz"));
// let final = Number(prompt("final notunuzu giriniz"));

// let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4)
// if (ortalama>60) {
//     alert(" Dersten geçtiniz " + ortalama)
// }else{
//     alert(" Dersten kaldınız " + ortalama)
// }











// let yas = +prompt("Yaşınızı giriniz");
// if (yas>=18) {
//     alert("Yaşınız: " + yas + " Reşitsiniz")
// }else{
//     alert("Yaşınız: " + yas + " Reşit değilsiniz")
// }






// let seçilenyol = prompt("gitmek istediğiniz yolu  seciniz");
// if (seçilenyol==1) {
//     alert("seçilen yol " + seçilenyol  + ". yoldur")
// }else if(seçilenyol==2){
//    alert("seçilen yol " + seçilenyol + ". yoldur") 
// }else if(seçilenyol==3){
//     alert("seçilen yol " + seçilenyol + ". yoldur")
// }else{
//     alert("Yanlış bir yol girmeyin!!!")
// }





// let isim = prompt("İsminizi giriniz : ");
// console.log(isim);







// // if
// let yas = prompt("Yaşınızı giriniz");
// if (yas>=18) {
//     alert("Yaşınız büyük ehliyet alabilirsiniz");
// }else{
//     alert("Yaşınız küçük ehliyet alamazsınız");
// }



// else if

// let not = prompt("Notunuzu giriniz");
// if (not>=90) {
//     alert("AA ile geçtiniz")
// }else if (not>=80 ) {
//     alert("BA ile geçtiniz")
// }else if (not>=70 ) {
//     alert("BB ile geçtiniz")
// }else if (not>=60 ) {
//     alert("CB ile geçtiniz")
// }else{
//     alert("Puanınız düşük hesaplama yapamadık!!!")
// }



// let menü = prompt("Menünüzü seçiniz")
// if (menü==1) {
//     alert("Ana yemek siparişiniz alındı...")
    
 
// }

//    if (menü==2) {
//         alert("Çorba şiparişiniz alındı")
//     }

//     if (menü==3) {
//         alert("Tatlı şiparişi alındı")
//     }











// let kilo = Number(prompt("Kilonuzu giriniz"));
// let boy = Number(prompt("boyunuzu metre cinsinden giriniz"));

// let sonuc = kilo/(boy*2);

// if (sonuc<18.5) {
//     console.log("İdeal kilonun altında " + sonuc);
    
// }else if (sonuc>18.5 && sonuc<=24.9) {
//     console.log("İdeal kilonun altında " + sonuc);
// }else if (sonuc>=25 && sonuc<=29.9) {
//     console.log("İdeal kiloda " + sonuc);
// }else if (sonuc>=30 && sonuc<=39.9) {
//     console.log("İdeal kilonun çok üstünde (obez) " + sonuc);
// }else if (sonuc>=40) {
//     console.log("İdeal kilonun çok üstünde (morbid obez) " + sonuc);
// }


// let müşteri = +prompt("Hoş geldiniz siparişiniz neydi?")
// if (müşteri>=1000) {
//     alert("VIP olduğunuz için size %30 indirim uyguladık")
// }else if (müşteri>=600) {
//     alert("VIP olduğunuz için ve ürünün fiyatı 1000 tlnin altındaysa size %20 indirim uyguladık")
// }else if (müşteri<=500) {
//     alert("Yeni ve 500 tlnin altında ürün aldıgınız için için %10 indirim yaptık")
// }else if (müşteri<=100) {
//     alert("Yeni ve 500 tlnin altında ürün aldıgınız için için %5 indirim yaptık")
// }else{
//     alert("Diğer durumlar için indirim uygulanmaz!!!")
// }




// let sipariş = Number(prompt("Sipariş tutarınızı giriniz"));

// if (sipariş>=1000) {
//     alert("Kargonuz ücretsizdir")
// }else if (sipariş>=500 && sipariş<=999) {
//     alert("Kargo ücretiniz 20 tl dir")
// }else if (sipariş>=250 && sipariş<=499) {
//     alert("kargo ücreti 30 tl dir")
// }else if (sipariş>=100 && sipariş<=249) {
//     alert("kargo ücreti 50 tl dir")
// }else if (sipariş<100) {
//     alert("kargo ücreti 75 tl dir")
// }






// let yakıt = Number(prompt("Yakıt seviyesini giriniz"));
// if (yakıt>=50) {
//     alert(" Yakıtınız iyi Aracı kullanmaya devam edebilirsiniz")
// }else if (yakıt>=20 && yakıt<=50) {
//     alert("Yakıt seviyeniz orta yakıt alın")
// }else if (yakıt>=1 && yakıt<=20) {
//     alert("Yakıt kritik seviyede yeni yakıt alın!!!")
// }else{
//     alert("Yakıt bitmiş araç hareket edemez!!!");
// }





// let ayadı=(prompt("Ay adı giriniz"));
// if (ayadı=="Aralık" || ayadı== "Ocak" || ayadı=="Şubat") {
//     alert("Kış mevsimindesiniz");
// }else if (ayadı=="Mart" || ayadı=="Nisan" ||ayadı=="Haziran") {
//     alert("İlkbahar Mevsimindesiniz");
// }else if (ayadı=="Haziran" || ayadı=="Temmuz" || ayadı=="Ağustos") {
//     alert("Yaz Mevsimindesiniz");
// }else if (ayadı=="Eylül" || ayadı=="Ekim" || ayadı=="Kasım") {
//     alert("Sonbahar Mevsimindesiniz");
// }else{
//     alert(" Boş geçmeyiniz")
// }




// let sıcaklık = prompt("Bugün sıcaklık nasıl?");
// if (sıcaklık>=30) {
//     alert("Hava çok sıcak")
// }else if (sıcaklık>=20 && sıcaklık<=29) {
//     alert("Hava  sıcak")
// }else if (sıcaklık>=18 && sıcaklık<=19) {
//     alert("Hava ılıman")
// }else if (sıcaklık<=10 ) {
//     alert("Hava çok soğuk")
// }else{
//     alert("Geçersiz bir sıcaklık girdiniz");
// }




// let sayi=prompt("1 ile 5 arasında bir Sayı giriniz");

// switch (sayi) {
//     case "1":
//         console.log("Girilen sayı 1 dir");
        
//         break;
// case "2":
//     console.log("Girilen sayı 2 dir");
//     break;
//     case"3":
//     console.log("Girilen sayı 3 dür");
//     break;
//     case "4":
//         console.log("Girilen sayı 4 tür");
//         break;
//         case"5":
//         console.log("Girilen sayı 5 tir");
//         break;

// default:
//     console.log("Girlen sayı 1 ile 5 rasında olmalıdır");
//     break;
// }


// let yenisatır = "\r\n"
// let metin = "1-Pazartesi"+yenisatır
// +"2- Salı"+yenisatır
// +"3-Çarşamba"+yenisatır
// +"4-Perşembe"+yenisatır
// +"5-Cuma"+yenisatır
// +"6-Cumartesi"+yenisatır
// +"7-Pazar"+yenisatır
// +"Lütfen bir seçim yapınız;"

// let deger = prompt(metin);
// switch (deger) {
//     case "1":
//         console.log("Pazartesi Günü");
        
//         break;
// case"2":
// console.log("Salı Günü");
// break;
// case"3":
// console.log("Çarşamba Günü");
// break;
// case"4":
// console.log("Perşembe Günü");
// break;
// case"5":
// console.log("Cuma Günü");
// break;
// case"6":
// console.log("Cumartesi Günü");
// break;
// case"7":
// console.log("Pazar Günü");
// break;
//     default:
//     console.log("Değer giriniz");
    
//         break;
// }



// // ATM UYG
// let yenisatir = "\r\n";
// let bakiye =1000;
// let metin = "1-Bakiye görünteleme"+yenisatir
// +"2-Para Çekme"+yenisatir
// +"3-Para Yatırma"+yenisatir
// +"4-Çıkış"+yenisatir
// +"Lütfen bir değer seçiniz";

// let seçim = prompt(metin);

// switch (seçim) {
//     case "1":
//         alert("Bakiyeniz " +bakiye)
//         break;
//         case"2":
//         let çekilecektutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
//         if(çekilecektutar<bakiye){
// bakiye = bakiye-çekilecektutar;
// alert("Kalan bakiye : " +  bakiye)
//         }
//     else{
    



// alert("Bakiyenizde fazla para çekemezsiniz!!!" + yenisatir
//     +"Bakiyeniz: " +bakiye+ "" + "Çekilecek Tutar : "  +çekilecektutar); 

//         }
    
//         case"3":
//         let yatırılacaktutar = Number(prompt("Yatırılacak tutarı giriniz :"));
//         bakiye= bakiye+yatırılacaktutar;
//         alert("Güncel bakiyeniz : " + bakiye);
//         break;
//         case"4":
//         console.log("Sistemden çıkış yapılmıştır...");
//         break;
//         default:
//             console.log("1-4 arasında değer giriniz !");
//             break;
//     } 
    


// Tür Dönüşümü

// stringden numbera dönüştürme

// let a = 5;
// let b = Number("10");
// console.log(a+b);

// let a =8
// let b=parseFloat("17.5")
// console.log(a+b);


// numberdan stringe dönüstürme

// let x = String(60);
// console.log(typeof x);
// console.log(x);

// let sonuc= String(true)

// let rakamlar =String([1,2,3,4]);
// console.log(rakamlar);





// Döngüler
// For Döngüsü



// for(let i=0; i<=10; i++){
//     console.log(i);
// }



// for(let a=0; a<=10; a+=2){
//     console.log(a); 
// }

// for(a=1; a<=10; a+=2){
//     console.log(a);
    
// }



// for(i=0; i<=50; i++){
//     if (i%2===0) {
//         console.log("İbrahim");
        
//     }else{
//         console.log("Kalafat");
        
//     }
// }



// toplam=0;
// for(i=30; i>=1; i--){
//     console.log(i);
//     toplam=toplam+i
// }

// console.log("Toplam : " ,toplam );





// let sayaç=0
// while (sayaç<=10) {
//     if (sayaç%2==1) {
//         console.log(sayaç);
       
//     }
//     sayaç++; 
// }

