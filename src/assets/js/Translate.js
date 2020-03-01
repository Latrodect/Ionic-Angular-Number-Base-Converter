function TranslateFunc(x,y,r){
    var str = x.split('.');
    var EachSplitTotal = str[0].split('');
    var EachSplitComma = str[1].split('');
    var arrayTotal = [];
  	var powed = 0;
  var powedTwo = 1;
  var Translate = 0;
  alert("You Can't Enter higher then  " + y);
  alert("If you are give higher then " + y + " program won't work.")
    for (var i = EachSplitTotal.length-1 ; 0 <= i; i--) {
        var c = EachSplitTotal[i];
        if(c === 'A' && y > 10 ){
          c = '10';
          Translate = parseInt(c);
        }else if(c === 'B' && y > 10){
          c = '11';
          Translate = parseInt(c);
        }
        else if(c === 'C' && y > 10){
          c = '12';
          Translate = parseInt(c);
        }
        else if(c === 'D' && y > 10){
          c = '13';
          Translate = parseInt(c);
        }
        else if(c === 'E' && y > 10){
          c = '14';
          Translate = parseInt(c);
        }
        else if(c === 'F' && y > 10){
          c = '15';
          Translate = parseInt(c);

        }else {
          Translate = parseInt(c);
        }
      var pow = Math.pow(y,powed);
      var Total =  Translate * pow ;
        arrayTotal.push(Total);
        powed = powed + 1 ;
    }
    for (var i = EachSplitComma.length -1 ; 0 <= i; i--) {
        var d = parseFloat(EachSplitComma[i]);
      var pow2 = Math.pow(y,i + 1);
      var total2 = d / pow2 ;
        arrayTotal.push(total2);
        powedTwo = powedTwo + 1 ;
      console.log(d)
      console.log(total2)
    }
    var arrSum = arrayTotal.reduce((a, b) => a + b).toFixed(arrayTotal.length +1);
  var Cup = arrSum.toString();
    var ChangeBase = Cup.split('.');
    var EachSplitLeft = ChangeBase[0].split('');
    var EachSplitRight = ChangeBase[1].split('');
    var EachSplitRightTwo = ChangeBase[1];
    var Turn = [];
  var TurnTwo = [];
  var Total = 0 ;
  var l = parseInt(ChangeBase[0]);
    for(i = 0; i < EachSplitLeft.length; i++){
        var Left = l % r ;
        if(Left === 10){
            Turn.push('A')
        }else if(Left === 11){
            Turn.push('B')
        }else if(Left === 12){
            Turn.push('C')
        }else if(Left === 13){
            Turn.push('D')
        }else if(Left === 14){
            Turn.push('E')
        }else if(Left === 15){
            Turn.push('F')
        }else {
            Turn.push(Left)
        }
      l = Math.floor(l/r); ;
    }
  Turn.push('.');
  var zero = '0.';
  var arrZeros = [];
  arrZeros.push(zero)
  arrZeros.push(EachSplitRightTwo)
  var splitted = arrZeros.join('');
  parseFloat(splitted);
  var cupTwo = 0.123123;
  var dotted = splitted ;
  for (var i = EachSplitRight.length + 1 ; 0 <= i; i--) {
    var splittedTwo = dotted * r;
    var powedTwo = splittedTwo.toString().split('.');
    parseInt(powedTwo[0]);
    var mod = powedTwo[0] % r ;
  if(mod  === 10){
    TurnTwo.push('A');
  }else if(mod === 11){
    TurnTwo.push('B');
  }else if(mod === 12){
    TurnTwo.push('C');
  }else if(mod === 13){
    TurnTwo.push('D');
  }else if(mod === 14){
    TurnTwo.push('E');
  }else if(mod === 15){
    TurnTwo.push('F');
  }else {
    TurnTwo.push(mod);
  }
  cupTwo = splittedTwo;
  dotted = cupTwo ;
    var DuptOne = Turn.toString();
    var DuptTwo = TurnTwo.toString();
    var repOne = DuptOne.split(',').join('');
    var repTwo = DuptTwo.split('.').join('');
    var repCommaTwo = repTwo.split(',').join('');
var Total = repOne + repTwo ;
var replaced = Total.split('.');
var Reversed = replaced[0].split('')
var replacedOne = Reversed.reverse().join('');
var Returned = replacedOne.toString()
}
document.getElementById("p1").innerHTML = Returned + '.' + repCommaTwo;
}
