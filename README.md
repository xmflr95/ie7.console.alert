# ie7 Console Alert

## console을 왜 재정의했는가?
Internet Explorer 7에서 console API 가 지원되지않아 log로 데이터 확인이 불가능하다.  
조금이라도 데이터를 확인해보고자 console을 닮은 alert을 제작함  

소스 최상단에 `window` 전역에 `console`로 등록  
소스 코드에 `console.log(args)`로 작성 시 `alert`으로 데이터를 확인 할 수 있도록 제작

- Object(객체)인 경우 해당 객체의 가장 얕은 부분까지 데이터 확인
- 그외 경우 문자열 출력

### 개선한다면?

- 객체 및 배열의 얕은 복사를 재귀나 무한 반복을 이용해 깊은 복사로 구현
- 더 많은 타입을 구분 가능하게 한다 

```js
if (typeof window.console == 'undefined' || window.console == undefined) {
  window.console={ 
      name: "console", 
      log: function() {
          var args = arguments;
          for (var i = 0; i < args.length; i++){
              var arg = args[i];
              var objStr = '';
              if (typeof arg == 'object' && Object.prototype.toString.call(arg).slice(8, -1) == 'Object') {
                  objStr += '{\n';
                  for (var j = 0; j < Object.keys(arg).length; j++) {                    
                      var key = Object.keys(arg)[j];
                      var val = arg[key];
                      objStr += '\t' + key + ' : ' + val + '\n';
                  }
                  objStr += '}';
                  alert(objStr);
              } else {
                  alert(args[i]); 
              }
          }
      } 
  };
}
```
