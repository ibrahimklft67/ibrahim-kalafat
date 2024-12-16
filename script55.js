// Atama oeratörleri



// let sayi=5;
// ------------------------------------

// == : eşittir

// console.log(5=5); boolean ifadelerinde kullanırız.

// let a = 5
// let b = 6
// let sonuc=a+b;
// console.log(sonuc ==5);

// console.log(5=="5");

// ----------------------------------------

// === : hem tipleri hemde degerlerinin eşit olmadıklarına bakar

// console.log(5===5);
// -----------------------------

// +=

// let sayi = 4;
// sayi +=7
// console.log(sayi);
// -----------------------------

// -=
// let sayi =6
// sayi-=2
// console.log(sayi);

// *=
// let sayi = 8
// sayi*=5;
// console.log(sayi);



// /=

// let sayi=4
// sayi/=2
// console.log(sayi);

// %=
// let sayi=12
// sayi%=5
// console.log(sayi);


// **=
// let sayi=5
// sayi**=3
// console.log(sayi);



// MANTIKSAL OPERATÖRLER

// && : ve  kosullar saglarsa true doner eger bir tanesi yanlıssa false doner.

// let yas=20;
// let para=3500;
// let sagliklimi=false;
// let haksayisi=3;
// console.log(yas>18 && para>1800 && sagliklimi==true);


// console.log(4>2 || 7<5);


// console.log(!(5>3));

// console.log((yas>18 && para>1000 && haksayisi>1) || (yas>18 && sagliklimi));


// let insan={
// isim: "İbrahim",
// Soyisim:"Kalafat",
// yas:19
// }
// console.log(insan);


// let iller=["ankara", "yozgat" ,"adıyaman","zonguldak"]
// console.log(iller);

// karşılaştırma operatoerleri
// != : eşit degilmi

// console.log(5!=3);


// let yas=23;
// console.log(yas!=10);

// console.log(15>12);
// console.log(10<11);


// console.log(12<=12);
// console.log(12>=13);


// console.log(window);

// alert("işleminizi kaydetmediniz!")

// let isim = prompt("Adınızı ve Soyadınızı Giriniz :");
// let yas = prompt("Yaşınızı Giriniz:")



// console.log("İsminiz: " + isim);
// console.log("Yaşınız: " + yas);


//  let sonuc = confirm("Sİlmek istediğinize emin misiniz")
//  console.log(sonuc);
 

// --------------------------------------------------------------------

    // KOŞUL YAPILARI

// let not = 35
// if (not>50) {
//     console.log("geçtiniz, notunuz " + not);
// }else{
//     console.log("kaldınız , "+ not);
// }

// Ehliyet Sınavına Giriş Uygulaması
// let yas = prompt("yasınız");
// let para= prompt("bütçeniz");
// if (yas>=18 && para>=6000) {
//     console.log("Ehliyete katılabilirsiniz");
// }else{
//     console.log("Ehliyete katılamazsınız");
// }


// Ders ortalaması bulma
// vize1 %30 , vize2 %30 final %40

// let vize1 = prompt("vize1 notunuz");
// let vize2 = prompt("vize2 notunuz");
// let final = prompt("final notunuz");

// let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);
// if (ortalama>=50) {

//     console.log("Dersten Geçtiniz : " + ortalama);
    
// }else{
//     console.log("Dersten Kaldınız : " + ortalama);
// }



// Lise sınav ortalaması bulma

// let Matematik = Number(prompt("Matematik Notunuz"))
// let cografya = Number(prompt("Cografya Notunuz"))
// let DinKültürü = Number(prompt("Dinkültürü Notunuz"))

// let ortalama = (Matematik*0.2)+(cografya*0.2)+(DinKültürü*0.2);
// if (ortalama>=50) {
//     console.log("Geçtiniz : Notunuz : " + ortalama);
    
// }else{
//     console.log("Kaldınız : Notunuz : " + ortalama);
    
// }



// let yas = Number(prompt("Yaşınızı Giriniz."));
// let bütçeniz = Number(prompt("Bütçenizi Giriniz."));

// if (yas>=18 && bütçeniz>=2000) {
//     alert("Ehliyeti Kazandınız Tebrikler. ");
// console.log("Ehliyeti Kazandınız Tebrikler. " + yas + bütçeniz);

// }
// else{
//     alert("Maalesef Kaybettiniz.");
//     console.log("Maalesef Kaybettiniz. " + yas);
    
// }




// let vize1 = Number(prompt("vize1 notunuzu giriniz"));
// let vize2 = Number(prompt("vize2 notunuzu giriniz"));
// let final = Number(prompt("final notunuzu giriniz"));

// let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

// if (ortalama>=60) {
//     alert("Tebrikler Sınav Notunuz " + ortalama);
// }else{
//     alert("Kazanamadınız : " + ortalama);
// }


// ---------------------------------------------------------------
// else if mantiği

// let alişveriş = Number(prompt("Alisveriş Miktarınızı Giriniz."));
// if (alişveriş>1000) {
//     alert("Alisveriş tutarınız 1000 TL den fazla olduğuna göre %20 indirim almiş oldunuz.");

// }else if( alişveriş>=500 && alişveriş<=1000){
//     alert("Alisveriş tutarınız 500 TL ve 1000TL  arasında olduğuna göre %10 indirim almiş oldunuz.");

// }else if(alişveriş >=100 &&  alişveriş<=500){
//     alert("Alisveriş tutarınız 500 TL ve 100TL den  arasında olduğuna göre %5 indirim almiş oldunuz.");

// }else{
//     alert("100 TL alışverişe indirim yok.");
// }



// let sporüyelik = prompt("Yaşınız :");
// if (sporüyelik>=7 && sporüyelik<=18) {
//     alert("Genç Programı")
// }else if(sporüyelik>=18 && sporüyelik<=40){
// alert("Tam üyelik :" + "Tüm Programlar")
// }else if(sporüyelik>40){
//     alert("Tam Üyelik :" + " Düşük Yoğunlu Programlar")
// }else{
// alert("Geçersiz üyelik türü")
// }

// ---------------------------------------------------------
// Çoklu if yapısı

































