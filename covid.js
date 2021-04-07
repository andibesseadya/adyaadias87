$(document).ready(function(){
    semuaData()
    dataIndonesia()
    dataBruneiDarussalam()
    dataLaos()
    dataMalaysia()
    dataPhilippines()
    dataSingapore()
    dataThailand()
    dataVietnam()

    function semuaData() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api', success : function(data) {
                try{
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;
                    var lastUpdate = data.lastUpdate;

                    $('#data-positif').html(positif.value);
                    $('#data-sembuh').html(sembuh.value);
                    $('#data-meninggal').html(meninggal.value);
                    $('#last-Update').html(lastUpdate.substring(0,10));
                }
                catch {
                    alert('Error');
                }
            }
        })
    }

    function dataIndonesia() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/IDN', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-indonesia').html(positif.value);
                    $('#data-sembuh-indonesia').html(sembuh.value);
                    $('#data-meninggal-indonesia').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataBruneiDarussalam() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/BRN', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-brunei').html(positif.value);
                    $('#data-sembuh-brunei').html(sembuh.value);
                    $('#data-meninggal-brunei').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataLaos() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/LAO', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-laos').html(positif.value);
                    $('#data-sembuh-laos').html(sembuh.value);
                    $('#data-meninggal-laos').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataMalaysia() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/MYS', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-malaysia').html(positif.value);
                    $('#data-sembuh-malaysia').html(sembuh.value);
                    $('#data-meninggal-malaysia').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataPhilippines() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/PHL', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-philippines').html(positif.value);
                    $('#data-sembuh-philippines').html(sembuh.value);
                    $('#data-meninggal-philippines').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataSingapore() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/SGP', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-singapore').html(positif.value);
                    $('#data-sembuh-singapore').html(sembuh.value);
                    $('#data-meninggal-singapore').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataThailand() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/THA', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-thailand').html(positif.value);
                    $('#data-sembuh-thailand').html(sembuh.value);
                    $('#data-meninggal-thailand').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }


    function dataVietnam() {
        $.ajax({
            url : 'https://covid19.mathdro.id/api/countries/VNM', success : function(data) {
                try {
                    var json = data;
                    var positif = data.confirmed;
                    var sembuh = data.recovered;
                    var meninggal = data.deaths;

                    $('#data-positif-vietnam').html(positif.value);
                    $('#data-sembuh-vietnam').html(sembuh.value);
                    $('#data-meninggal-vietnam').html(meninggal.value);
                }
                catch {
                    alert('Error');
                }
            }
        })
    }



})