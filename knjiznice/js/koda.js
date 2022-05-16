const TEACHING_API_BAZA = "Hristijan02";
const SENSEI_RACUN = "0x46F8dBEe7bEE39f42f377DB4D8a5A09B2314B778";

let SENSEI_BC_RPC_URL = "https://sensei.lavbic.net:8546";
let TEACHING_API_BASE_URL =
  "https://teaching.lavbic.net/api/OIS/baza/" + TEACHING_API_BAZA + "/podatki/";

/**
 * Generator podatkov za novega uporabnika, ki bo uporabljal aplikacijo. Pri
 * generiranju podatkov je potrebno najprej kreirati nov scenarij s specifičnimi
 * podatki, ki se nanašajo na scenarij.
 *
 * @param stScenarija zaporedna številka scenarija (1, 2 ali 3)
 * @return scenarijId generiranega scenarija
 */
function generirajScenarij(stScenarija) {
  scenarijId = "";

  // TODO: Potrebno implementirati

  return scenarijId;
}

// function Funkcija() {
//   console.log("ebi se");
//   $.ajax({
//     url: "http://api.coinlayer.com/api/live?access_key=f0dc9aeb6248ccf563e6c8fd93577f94",
//     type: "GET",
//     success: function(data){
//       console.log(data.rates);
//       for(i in data.rates) {
//         console.log(i);
//         console.log(data.rates[i]);
//       }
//     },
//     error: function(){
//       alert("neso ne e ko so treba");
//     }
//   })
// }

function nacrtajGraf() {
  console.log("mamati");
  var st = 0;
  $.ajax({
    url: "https://api.coinlayer.com/api/live?access_key=f0dc9aeb6248ccf563e6c8fd93577f94",
    type: "GET",
    success: function(data){
      console.log(data);
      var dataPoints = [];
      for(i in data.rates) {
        if(data.rates[i] < 100 || data.rates[i] > 9999) {
          continue;
        }
        dataPoints.push({
          x:st, label: i,
          y: data.rates[i],
        })
        st++;
      }
      console.log(dataPoints);
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Daily Sales Data"
        },
        axisY: {
          title: "Units",
          titleFontSize: 24,
        },
        axisX: {
          xValueFormatString: "###",
        },
        data: [{
          type: "column",
          yValueFormatString: "###.######",
           xValueFormatString: "string",
          dataPoints: dataPoints,
        }]
      })
      chart.render();
    },
    



    
  }) 
}
$(document).ready(()=> {
 
  nacrtajGraf();
})
  
  var coek1={
    id:"4ef74e1f-cedc-4af6-90ac-a8c10901b829",
    name:"Jack",
    surname: "Bryan",
    age:40,
    country:"US",
    crypto:"ETH",
    money:"1,312$"
  };
  var coek2={
    id:"99449e03-6782-44ec-9c6f-fac7ad7db648",
    name:"Tyson",
    surname:"Trevorre",
        age:27,
        country:"CA",
        crypto:"ADA",
        money:"2,800$",
  };
  var coek3={
    id:"d061196a-4e98-4d90-b42e-fdbedca0ec22",
    name:"Ansel",
    surname:"Adams",
        age:30,
        country:"SWE",
        crypto:"ETH",
        money:"8,000$"
  }

  
  function novInvestitor() {
    var investitor = {
      id: generirajID(),
      ime: $("#novoIme").val(),
      priimek: $("#novPriimek").val(),
      email: $("#novEmail").val(),
    };
    if (
      investitor.ime != "" &&
      investitor.priimek != "" &&
      investitor.email != ""
    ) {
      $.ajax({
        url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + investitor.id,
        type: "PUT",
        data: JSON.stringify(investitor),
        contentType: "application/json",
        success: function () {
          console.log("Investitor je bil uspešno dodan!");
          $("#novInvestitorSoId").empty();
          $("#novInvestitorSoId").append(
            "<span style='margin-top:5px' id='ubavText'>Nov investitor z ID " +
              investitor.id +
              " je dodan.</span>"
          );
        },
        error: function () {
          alert("Investitor ni bilo mogoče dodati.");
        },
      });
    } else {
      $("#novInvestitorSoId").empty();
      $("#novInvestitorSoId").append(
        "<span style='margin-top:5px' id='ubavText'>Morate izpolniti vsa vnosna polja.</span>"
      );
    }
  }
  
  function generirajScenarij(stScenarija) {
    scenarijId = "";
    var Inv;
    switch (stScenarija) {
      case 1:
        Inv = JSON.parse(JSON.stringify(coek1));
  
        $.ajax({
          url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + coek1.id,
          type: "PUT",
          data: JSON.stringify(coek1),
          contentType: "application/json",
          success: function () {
            console.log("Investitor je bil uspešno izbran!");
           
            $("#id1").val(coek1.id);
            
          },
          error: function () {
            alert("Investitor ni bilo mogoče izbrati.");
          },
        });
        break;
      case 2:
        // Inv = investitor2;
  
        Inv = JSON.parse(JSON.stringify(coek2));
  
        $.ajax({
          url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + coek2.id,
          type: "PUT",
          data: JSON.stringify(coek2),
          contentType: "application/json",
          success: function () {
            console.log("Investitor je bil uspešno izbran!");
            // let imeiprez2 = investitor2.ime + " " + investitor2.priimek;
            $("#id2").val(coek2.id);
            // $("#investitor2").val(investitor2.ime);
          },
          error: function () {
            alert("Investitor ni bilo mogoče izbrati.");
          },
        });
  
        break;
      case 3:
      
        Inv = JSON.parse(JSON.stringify(coek3));
        
        $.ajax({
          url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + coek3.id,
          type: "PUT",
          data: JSON.stringify(coek3),
          contentType: "application/json",
          success: function () {
            console.log("Investitor je bil uspešno izbran!");
            
            $("#id3").val(coek3.id);
           
          },
          error: function () {
            alert("Investitor ni bilo mogoče izbrati.");
          },
        });
        break;
    }
    console.log(Inv);
  
    // TODO: ajax funkcija za dodavanje na pacientot Inv vo API-to =)
    // TODO: Potrebno implementirati
  
    return scenarijId;
  }
  function dodajStaticniUporabnik(coek) {
    $.ajax({
      url: TEACHING_API_BASE_URL + "azuriraj?kljuc=" + coek.id,
      type: "PUT",
      data: JSON.stringify(coek),
      contentType: "application/json",
      success: function () {
        console.log("Uporabnik je bil uspešno dodan!");
      },
      error: function () {
        alert("Uporabnika ni bilo mogoče dodati.");
      },
    });
  }

  // function toggleText() {

  //   if (
  //  $("#izberi").val() == "Jack Bryan" ){
  //   console.log(coek1.age);
  //   $("#kocka").val() = coek1.age;
  //   $("#kocka").val() = coek1.country;
  //   $("#kocka").val() = coek1.crypto;
  //   $("#kocka").val() = coek1.money;
  //  }
      
  //  else if (
  //   $("#izberi").val() == "Tyson Trevorre") {
     
  //     $("#kocka").val()= coek2.age;
  //     $("#kocka").val() = coek2.country;
  //     $("#kocka").val() = coek2.crypto;
  //     $("#kocka").val() = coek2.money;
  //   }

  // }

  
// TODO: Tukaj implementirate funkcionalnosti, ki jo podpira vaša aplikacija


 /**
 * Funkcija za pošiljanje sporočila
 */
  const posljiSporocilo = () => {
    $.ajax({
        url: zacetniUrlNaslov + "sporocila/" + trenutniKanal,
        type: "POST",
        contentType: 'application/json',
        data: JSON.stringify({uporabnik: uporabnik, besedilo: $("#sporocilo").val()}),
        success: function (data) {
            $("#sporocilo").val("");
            posodobiPogovor();
            posodobiUporabnike();
        },
        error: function (err) {
            alert(err.responseJSON.status);
        }
    });
  };
  
  
  /**
  * Funkcija za donacijo 0,1 Ethereum kriptovalute
  */
  const donirajEthereum = async (modalnoOknoDoniraj) => {
    try {
        var posiljateljDenarnica = $("#eth-racun").attr("denarnica");
        var prejemnikDenarnica = $("#denarnica-prejemnika").val();
  
        let rezultat = await web3.eth.sendTransaction({
            from: posiljateljDenarnica,
            to: prejemnikDenarnica,
            value: 0.1 * Math.pow(10, 18),
        });
  
        // ob uspešni transakciji
        if (rezultat) {
            modalnoOknoDoniraj.hide();
        } else {
            // neuspešna transakcija
            $("#napakaDonacija").html(
                "<div class='alert alert-danger' role='alert'>" +
                "<i class='fas fa-exclamation-triangle me-2'></i>" +
                "Prišlo je do napake pri transakciji!" +
                "</div>"
            );
        }
    } catch (e) {
        // napaka pri transakciji
        $("#napakaDonacija").html(
            "<div class='alert alert-danger' role='alert'>" +
            "<i class='fas fa-exclamation-triangle me-2'></i>" +
            "Prišlo je do napake pri transakciji: " + e +
            "</div>"
        );
    }
  };
  
  /**
  * Funkcija za prikaz donacij v tabeli
  */
  const dopolniTabeloDonacij = async () => {
    try {
        let steviloBlokov = (await web3.eth.getBlock("latest")).number;
        let st = 1;
        $("#seznam-donacij").html("");
        for (let i = 0; i <= steviloBlokov; i++) {
            let blok = await web3.eth.getBlock(i);
  
  
            for (let txHash of blok.transactions) {
                let tx = await web3.eth.getTransaction(txHash);
                if (!prijavljenRacun || prijavljenRacun == tx.from) {
                    $("#seznam-donacij").append("\
                    <tr>\
                        <th scope='row'>" + st++ + "</th>\
                        <td>" + okrajsajNaslov(tx.hash) + "</td>\
                        <td>" + okrajsajNaslov(tx.from) + "</td>\
                        <td>" + okrajsajNaslov(tx.to) + "</td>\
                        <td>" + parseFloat(web3.utils.fromWei(tx.value)) + " <i class='fa-brands fa-ethereum'></i></td>\
                    </tr>");
                }
            }
        }
    } catch (e) {
        alert(e);
    }
  };
  
  function okrajsajNaslov(vrednost) {
    return vrednost.substring(0, 4) + "..." + vrednost.substring(vrednost.length - 3, vrednost.length);
  }
  
  /**
  * Funkcija za dodajanje poslušalcev modalnih oken
  */
  function poslusalciModalnaOkna() {
    const modalnoOknoPrijava = new bootstrap.Modal(document.getElementById('modalno-okno-prijava'), {
        backdrop: 'static'
    });
  
    const modalnoOknoDoniraj = new bootstrap.Modal(document.getElementById('modalno-okno-donacije'), {
        backdrop: 'static'
    });
  
    $("#denarnica,#geslo").keyup(function (e) {
        if ($("#denarnica").val().length > 0 && $("#geslo").val().length > 0)
            $("#gumb-potrdi-prijavo").removeAttr("disabled");
        else
            $("#gumb-potrdi-prijavo").attr("disabled", "disabled");
    });
  
    $("#gumb-potrdi-prijavo").click(function (e) {
        prijavaEthereumDenarnice(modalnoOknoPrijava);
    });
  
    $("#potrdi-donacijo").click(function (e) {
        donirajEthereum(modalnoOknoDoniraj);
    });
  
    var modalnoOknoDonacije = document.getElementById('modalno-okno-donacije');
    modalnoOknoDonacije.addEventListener('show.bs.modal', function (event) {
        var prijavljenaDenarnica = $("#eth-racun").attr("denarnica");
        $("#posiljatelj").text(prijavljenaDenarnica);
    });
  
    var modalnoOknoSeznamDonacij = document.getElementById('modalno-okno-seznam-donacij');
    modalnoOknoSeznamDonacij.addEventListener('show.bs.modal', function (event) {
        dopolniTabeloDonacij();
    });
  }
  
  /**
  * Funkcija za prijavo Ethereum denarnice v testno omrežje
  */
  const prijavaEthereumDenarnice = async (modalnoOknoPrijava) => {
    try {
        let rezultat = await web3.eth.personal.unlockAccount(
            $("#denarnica").val(),
            $("#geslo").val(),
            300);
  
        // ob uspešni prijavi računa
        if (rezultat) {
            prijavljenRacun = $("#denarnica").val();
            $("#eth-racun").html(okrajsajNaslov($("#denarnica").val()) + " (5 min)");
            $("#eth-racun").attr("denarnica", $("#denarnica").val());
            $("#gumb-doniraj-start").removeAttr("disabled");
            modalnoOknoPrijava.hide();
        } else {
            // neuspešna prijava računa
            $("#napakaPrijava").html(
                "<div class='alert alert-danger' role='alert'>" +
                "<i class='fas fa-exclamation-triangle me-2'></i>" +
                "Prišlo je do napake pri odklepanju!" +
                "</div>"
            );
        }
    } catch (napaka) {
        // napaka pri prijavi računa
        $("#napakaPrijava").html(
            "<div class='alert alert-danger' role='alert'>" +
            "<i class='fas fa-exclamation-triangle me-2'></i>" +
            "Prišlo je do napake pri odklepanju: " + napaka +
            "</div>"
        );
  
    }
  };
  
  $(document).ready(function () {
    $("#sporocila").html("");
  
    /* Povežemo se na testno Ethereum verigo blokov */
    web3 = new Web3("http://sensei.lavbic.net:8545");
  
    /* Dodamo poslušalce */
    poslusalciModalnaOkna();
    $("#poslji").click(posljiSporocilo);
    $('#sporocilo').keypress(function (e) {
        if ('13' == (e.keyCode ? e.keyCode : e.which))
            posljiSporocilo();
    });
  });

  function Ispishi() {
    var ID = $("#ime").val();
    var partija;
    if (ID == "4ef74e1f-cedc-4af6-90ac-a8c10901b829") {
      partija = coek1.id;
    } else if (ID == "99449e03-6782-44ec-9c6f-fac7ad7db648") {
      partija = coek2.id;
    } else if (ID == "d061196a-4e98-4d90-b42e-fdbedca0ec22") {
      partija = coek3.id;
    }
  
    $.ajax({
      url: TEACHING_API_BASE_URL + "vrni/" + partija,
      type: "GET",
      success: function (data) {
        console.log(data);
        document.getElementById("ime1").value = data.name;
        document.getElementById("prezime1").value = data.surname;
   
        // $("#preberiObstojeciID").val()="e5455d5b-9bd5-4703-be88-1c1e24a17eeb";
      },
    });
  }

  


