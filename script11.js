//Documen write ile çıktı verme//


// document.write("İbrahim Kalafat <br>");
// document.write("Hello world");
// // document.write(55 ,"<br>");
// document.write(5.7 ,"<br>");
// document.write(true ,"<br>");

// ----------------------------------------

// console.log() kullanırız çıktı almak için;

// console.log("Hello world");
// console.log("İbrahim Kalafat");
// console.log(3.4);
// console.log(3);
// console.log(true);

// let a=5
// // let b=4
// console.log("iki sayının toplamı:",a+b);
// let a=7
// let b=4
// console.log("iki sayının çarpımı : " ,a*b);


// alert():uyarı
// console.log(window);


// let a=5
// let b=6

// alert("iki sayının toplamı:"+ (a+b));

// --------------------------------------------
// veri türleri

// String
// let isim ="İbrahim";
// console.log(isim);
// console.log(typeof isim);

// Number
// let sayi = 4
// console.log(sayi);
// console.log(typeof sayi);

// Boolean
// let ibo = true
// console.log(ibo);
// console.log(typeof ibo);

// console.log(5<3);

// let a=7
// let b=8
// console.log(a+b>9);

// null
// let a= null
// console.log(a);


// Object
// let insan={
//     ad:"ibrahim",
//     soyad:"kalafat",
//     yas:19 

// }
// console.log(insan);


// function
// let func=function() {
//     console.log("merhabalar");
    
// }

// func()

// Array
// let iller=[
    
//      "adana","ankara", "izmir" ,"bursa"
    
// ]
// console.log(iller[3]);



// let a=6
// let b=45
// console.log("iki sayının toplamı : " , (a*b));
// -----------------------------------------------------

// SCOPLAR :Global scope her yerden erişebilir örneğin var.

// function scope sadece function  içerisinde erişilebilen scoptur. 

// block scope sadece parantezlerin içinden erişilir. let const
// ---------------------------------------------
// aritmetik operatorler
// let b=6
// let c=7
// console.log(b+c);

// let a=5
// a--;
// console.log(a);

// -------------------------------------
// Atama operatorleri

// =
// let a=8
// console.log(a);

// == :eşittir

// let a=7
// let b=8
// let sonuc=a+b;

// console.log(sonuc==15);

// === hem değere hem tiplere eşitmi ona bakar
// console.log(5===5);

// +=
// let sayı=6

// sayı+=3
// console.log(sayı);

// let sayi=8
// sayi*=3
// console.log(sayi);

// -----------------------------------
// mantıksal operator

// let yas=24
// let para=3000
// let saglıklımı=false
// console.log(yas >=18 && para>=3000 && saglıklımı);

// console.log(6>4 || 5<3);

// console.log(!(6>5));

// console.log((yas>=18 && para>=3000) || saglıklımı);


// ---------------------------------
// Karşılaştırma operatoru

// console.log(5!==3);

// let yas =23
// console.log(yas!=23);


// console.log(15>12);
// console.log(11<12);

// console.log(12>=13);

// -------------------------
// Diyalog kutuları

// prompt("Yaşınızı giriniz")
// let yas=prompt("Yaşınızı giriniz");
// console.log(yas);

// alert("merhabalar")
// confirm("onayladınızmı")
// --------------------------------
// Koşul Yapıları

// let not =15
// if (not>50) {
//     console.log("Geçtiniz notunuz : " + not );
    
// }else{
//     console.log("Kaldınız : " + not);
    
// }

// let yas =+prompt("Yaşınız");
// let para=+prompt("Bütçeniz");
// if (yas>=18 && para>=3000) {
//     console.log("Ehliyeti geçtiniz");
    
// }else{
//     console.log("Ehliyeti kaybettiniz");
    
// }


// Vize notu hesaplama
// let vize1 = +prompt("Vize1 Notunuzu Giriniz");
// let vize2 = +prompt("Vize2 Notunuzu Giriniz");
// let final = +prompt("Final Notunuzu Giriniz");

// ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);
// if (ortalama>=50) {
//     alert("Geçtiniz : " + ortalama); 
// }else{
//     alert("Kaldınız : " + ortalama);
// }

// Yol seçme 
// let yol = prompt("Gitmek istediğiniz yolu seçiniz");

// if (yol==="1") {
//     alert("Seçilen yol : " + yol +". yoldur" );
// }else if (yol==="2") {
//     alert("Seçilen yol : " + yol+". yoldur" );
// }else if (yol==="3") {
//     alert("Seçilen yol : " + yol+". yoldur" );
// }else{
//     alert("Doğru bir ifade seçiniz!!!");
// }




// Boy kilo endeksi uygulaması
// let kilo = +prompt("Kilonuzu giriniz");
// let boy = +prompt("Boyunuzu giriniz");

// ortalama = kilo/(boy*boy);

// if (ortalama<18) {
//     alert("Zayıfsınız");

// }else if (ortalama>18 && ortalama<24) {
//     alert("Sağlıklısınız");
// }else if (ortalama>25 && ortalama<29) {
//     alert("Şişmansınız");
// }else if (ortalama>30 && ortalama<39) {
//     alert("Obezsiniz")
// }else if (ortalama>40) {
//     alert("Aşırı Obez (Morbid obez)");
// }else{
//     alert("Başka bir değer girmeyiniz ve Boş bırakmayınız")
// }



// DÖNGÜLER
// 1 den 10a kadar yazdırma

// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// Çiftleri yazdırma

// for(let i=0; i<=10; i+=2){
//     console.log(i);
    
// }

// Tekleri yazdırma

// for(i=1; i<10; i+=2){
//     console.log(i);
    
// }

//1 den 10a kadar İsim yazdırma

// for(let i=1; i<=10; i++){
   
//    if (i%2==1) {
//     console.log("ibrahim");
    
//    }else{
//     console.log("kalafat");
//    }
// }


// 50 den 0a kadar yazdırma
// let toplam=0
// for(let i=50; i>1; i--){
//     toplam=toplam+i;
//     console.log(i);
    
// }
// console.log("toplam : " , toplam);



// while

// 1 den 10 a kadar yazdırma
// let sayac=1;
// while (sayac<=10) {
//     console.log(sayac);
//     sayac++;
// }
// 


// let sayac=0;
// while (sayac<=10) {
//     if (sayac%2==0) {
//         console.log(sayac);
        
//     }
//     sayac++;
// }

// let sayac=1
// while (true) {
//    console.log(sayac);
//    if (sayac==7) {
//     break
//    }
//     sayac++;
// }




// do while

// 1 den 10 kadar yazdırma

// let sayac=1
// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10);

// let yas = 19
// do {
//     console.log("ehliyeti alabilirsiniz");
    
// } while (yas>=25);


// 1 den 20 ye kadar tek sayıların toplamı
// sayaç=1;
// let toplam=0;
// do {
//     if (sayaç%2==1) {
//         toplam+=sayaç;
//     }
//     sayaç++;
// } while (sayaç<=30);

// console.log("toplam : " ,sayaç) ;


// break-contiune

// 1 den 10a kadar yapalım 8 e geldiğimiz de döngüden çıkalım

// let sayac=1;
// while (sayac<=10) {
//     console.log(sayac);
//     if (sayac==8) {
//         break;
//     }
//     sayac++;
// }


// //? continue
// let döngü=0
// while (döngü<=10) {
    
//       döngü++;
//       if (döngü>10) {
//         break;
//       }
//     if (döngü==8) {
//         continue;
//     }
// console.log(döngü);
// }






// let döngü=0

// while (döngü<=10) {
//     döngü++;
//     if (döngü>10) {
//         break;
//     }
//     if (döngü==8) {
//         continue;
//     }
//     console.log(döngü);
    
// }


















// Çarpım tablosu
// for(i=1; i<=10; i++){
//     for(let j=1; j<=10; j++){
//         console.log (i+"x"+j+"="+(i*j));
       
        
//     }
//     console.log("--------------------------");
    
// }



// Asal sayı bulma

// let number=+prompt("sayı giriniz");
// let sonuç=true
// for(i=2; i<=Math.floor(number/2);i++){
// if (number%i==0) {
//     sonuç=false
//     break;
// }
// }
// if (sonuç) {
//     alert(number+" Asaldır");
// }else{
//     alert(number+" Asal değildir");
// }

// faktöriyel bulma 

// let sayi1=+prompt("Bir sayı giriniz");
// let çarpım=1
// for(i=1; i<=sayi1; i++){
//     çarpım=çarpım*i;

// }
// alert("Sonuç : "+çarpım)

// Armstrong sayısı
// let sayi=prompt("sayı giriniz");
// let toplam=0
// for(i=0; i<sayi.length; i++){
// let rakam=sayi.charAt(i);
// toplam+=rakam*rakam*rakam;
// }
// if (sayi==toplam) {
//     alert("Armstrong sayısı");
// }else{
//     alert("Armstrong sayısı değil!!!");
// }

// // Kullanıcıdan bir sayı almak için prompt
// let maxSayi = parseInt(prompt("1'den kaça kadar olan sayıları kontrol etmek istersiniz?"));

// // Tek ve çift sayıları ayrı ayrı yazdır
// console.log("Tek Sayılar:");
// for (let i = 1; i <= maxSayi; i++) {
//     if (i % 2 !== 0) {
//         console.log(i); // Tek sayı
//     }
// }

// console.log("\nÇift Sayılar:");
// for (let i = 1; i <= maxSayi; i++) {
//     if (i % 2 === 0) {
//         console.log(i); // Çift sayı
//     }
// }




// let sayı=+prompt("sayı giriniz");
// let çarpım=1
// for(let i=1; i<=sayı;i++){
// çarpım=çarpım*i;

// }
// alert("sonuç ;"+çarpım);

// let sayi=+prompt("Bir sayı giriniz");

// for(i=1; i<=sayi;i++){
//     if (i%2===0) {
        
//         console.log("çift sayı " ,i);
       
      
//     }else{
//     console.log("tek sayı" ,i);
    
// }
   
  
// }
   
// let küp=+prompt("bir sayı giriniz");

// for(i=1;i<=küp;i++){
// console.log(i+" küpü : "  +(i*i*i));




// }



// let sayi=+prompt("Bir sayı giriniz");

// for(i=1; i<=sayi; i++){
// console.log(i+" karesi: " +i*i);

// }










