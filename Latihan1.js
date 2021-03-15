function mean() {
    A = parseFloat(document.getElementById("firstNum").value);
    B = parseFloat(document.getElementById("secondNum").value);
    C = parseFloat(document.getElementById("thirdNum").value);
  
    document.getElementById("mean").innerHTML = (A + B + C) / 3;
  }
  
  function max() {
    A = parseFloat(document.getElementById("firstNum").value);
    B = parseFloat(document.getElementById("secondNum").value);
    C = parseFloat(document.getElementById("thirdNum").value);
  
    document.getElementById("max").innerHTML = Math.max(A, B, C);
  }
  
  function min() {
    A = parseFloat(document.getElementById("firstNum").value);
    B = parseFloat(document.getElementById("secondNum").value);
    C = parseFloat(document.getElementById("thirdNum").value);
  
    document.getElementById("min").innerHTML = Math.min(A, B, C);
  }
  
  function median() {
    A = parseFloat(document.getElementById("firstNum").value);
    B = parseFloat(document.getElementById("secondNum").value);
    C = parseFloat(document.getElementById("thirdNum").value);
  
    var arr = [A, B, C];
    arr.sort(function (a, b) {
      return a - b;
    });
  
    document.getElementById("median").innerHTML = arr[1];
  }

  function hasil() {
    mean()
    max()
    min()
    median()
  }

  function hapus(){
    document.getElementById('firstNum').value='',
        document.getElementById('secondNum').value='', 
        document.getElementById('thirdNum').value='',
        document.getElementById('mean').innerHTML = '',
        document.getElementById('min').innerHTML = '',
        document.getElementById('max').innerHTML = '',
        document.getElementById('median').innerHTML = '';
  }
  