# mission2

# 1. naming convention

 식별자를 만들 때 가독성이 좋도록 규정한 명명 규칙

## 1.1. 카멜 케이스

 단어가 합쳐진 부분마다 첫 글자를 대문자로 표기, 맨 앞글자를 소문자로 표기, html id 명, JS의 함수 명명으로 주로 사용.

- ex ) camelCase

## 1.2. 파스칼 케이스

 단어가 합쳐진 부분마다 첫 글자를 대문자로 표기, 맨 앞글자를 대문자로 표기, JS의 객체 명명으로 주로 사용.

- ex ) PascalCase

## 1.3. 스네이크 케이스

 단어가 합쳐진 부분마다 언더라인 추가, html class 명으로 주로 사용

- ex ) snake_case

## 1.4. 케밥 케이스

 단어가 합쳐진 부분마다 하이픈 추가, html class 명으로 주로 사용

- ex ) kebab-case

# 2. commit convention

 먼저 커밋 메시지는 **제목, 본문, 꼬리말** 세 가지 파트로 나누고, 각 파트는 빈 줄을 두어서 구분한다.

> type:subject
body
footer
> 
- type : 어떤 의도로 커밋했는지를 type에 명시
- subject : 최대 50글자가 넘지 않도록 하고 마지막에 특수문자는 쓰지 않는다. 영문으로 표기하는 경우 동사(원형)를 가장 앞에 두고 명령어로 작성하며 첫 글자는 대문자로 표기한다. 한글로 제목을 작성하는 경우 고침, 추가, 변경의 명령어로 시작. ex) Feat: “추가 get data api 함수”
- body : 긴 설명이 필요한 경우에 작성한다. **어떻게** 했는지가 아니라, **무엇을** **왜** 했는지를 작성한다. 최대 75자를 넘기지 않도록 한다. ( 선택사항 )
- footer : issue tracker ID를 명시하고 싶은 경우에 작성 ( 선택사항 )

## 2.1. subject

### Type

타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 한다.

추가적인 문맥 정보를 제공하기 위한 목적으로 괄호 안에 적을 수도 있다. ex) Fix(database):

**태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의**

[ ](https://www.notion.so/7140189cfbdc4ec1aa9137ad79e16821)

## 2.3. footer

 꼬리말은 선택 사항이고, issue tracker ID를 작성한다. 꼬리말은 “유형: #이슈 번호” 형식으로 사용한다. 여러 개의 이슈 번호를 적을 때는 쉼표로 구분한다.

 이슈 트래커 유형은 다음 중 하나를 사용한다.

- Fixes : 이슈 수정중 ( 아직 해결x )
- Resolves : 이슈를 해결했을 때
- Ref : 참고할 이슈가 있을 때
- Related to : 해당 커밋에 관련된 이슈번호 ( 아직 해결 x )

< commit message 예시 >

```jsx
Feat: "추가 로그인 함수" 

로그인 API 개발 

Resolves: #123 
Ref: #456 
Related to: #48, #45
```

## 2.4 commit message emoji

[  ](https://www.notion.so/f79440626a8547919ae10cca54316431)

# 3. template literals

```jsx
var a = 20;
var b = 8;
var c = "자바스크립트";
var str = "저는 " + (a + b) + "살이고 " + c + "를 좋아합니다.";
console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.
```

```jsx
var a = 20;
var b = 8;
var c = "자바스크립트";
var str = "저는 " + (a + b) + "살이고 " + c + "를 좋아합니다.";
console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.
```

 템플릿 리터럴에서는 위와 같이 작은따옴표(')나 큰따옴표(") 대신 백틱(`)(grave accent)로 감싸주고, $와 중괄호{}를 사용하여 표현식을 표기할 수 있다.

 줄바꿈을 여러줄로 된 문자열로 표현할 수 있다. 역슬래시와 조합한 제어문자(\n)가 아닌 에디터 입력기에서 엔터키를 눌러 줄을 바꾼 것을 그대로 유지

 중첩이 가능하다. `문자열 ${'출력'+${'중첩'}} 과 같은 템플릿 리터럴 중첩 표현이 가능하다.

 특수문자는 앞에 `\`를 앞에 붙여 문자열에 적을 수 있다.

## 3.1. 중첩

```jsx
const classes = `header ${ isLargeScreen() ? '' :
                (item.isCollapesd ? 'icon-expander' : 'icon-collapser')}`;
```

```jsx
const classes = `header ${ isLargeScreen() ? '' :
                `icon-${item.isCollapsed ? 'expander' : 'collapser'}` }`;
```

  중첩이 가능하다. `문자열 ${'출력'+${'중첩'}} 과 같은 템플릿 리터럴 중첩 표현 가능

## 3.2. Tagged template

```jsx
let person = 'Lee';
let age = 28;

let tag = function(strings, personExp, ageExp) {    //함수 이름은 원하는 대로 가능!
    let str0 = strings[0];
    let str1 = strings[1];
    console.log("str0 : " + str0);  //strings는 
    console.log("str1 : " + str1);

    let ageStr;
    if(ageExp > 99) ageStr = 'centenaian';
    else ageStr = 'youngster';

    return str0 + personExp + str1 + ageStr;    //이 함수 내에서 template literal 반환 가능
};
let output = tag`that ${person} is a ${age}`;
console.log(output);    //that Lee is a youngster
```

```jsx
const ramenList = [
    {
        brand: '농심',
        items: ['신라면','짜파게티','참치마요','둥지냉면']
    },
    {
        brand: '삼양',
        items: ['삼양라면', '불닭볶음면']
    },
    {
        brand: '오뚜기',
        itmes: []
    }
];

function fn(strings, brand, items) {
    let str;
    if(undefined === items) {
        str = brand + "의 라면은 재고가 없습니다!";
    } else {
        str = strings[0] + brand + strings[1] + items;
    }
    return str;
}

console.log(fn`구매가능한 ${ramenList[0].brand}의 라면 : ${ramenList[0].items}`);
//구매가능한 농심의 라면 : 신라면,짜파게티,참치마요,둥지냉면
console.log(fn`구매가능한 ${ramenList[1].brand}의 라면 : ${ramenList[1].items}`);
//구매가능한 삼양의 라면 : 삼양라면,불닭볶음면
console.log(fn`구매가능한 ${ramenList[2].brand}의 라면 : ${ramenList[2].items}`);
//오뚜기의 라면은 재고가 없습니다!
```

 태그를 사용하여 템플릿 리터럴을 함수로 파싱 가능

# 4. casting

## 4.1. 암시적 형 변환

### 4.1.1. 산술연산자

 + 연산자는 숫자보다 문자열이 우선시되어, 숫자형이 문자형을 만나면 문자형으로 변환하여 연산된다.

```jsx
50 + 50; //100
100 + “점”; //”100점”
“100” + “점”; //”100점”
“10” + false; //”100"
99 + true; //100
```

 다른 연산자( - * / % ) 는 숫자가 문자열보다 우선시되기 때문에 문자형으로의 변환이 일어나지 않는다.

```jsx
string * number // number
string * string // number
number * number // number
string * boolean //number
number * boolean //number
“2” * false; //0
2 * true; //2
```

### 4.1.2. 동치비교

 엄격한 비교 ===는 타입과 값 모두 비교, 형 변환 비교 ==는 값을 비교하기 전에 동일한 타입으로 변경 후 값을 비교.

 아래는 모두 엄격하지 않는 동치 비교이며, 결과값은 ‘0==0’ 이므로 ‘true’ 이다.

```jsx
null == undefined // true 0 == 0
“0” == 0 // true 0 == 0
0 == false // true 0 == 0
“0” == false // true 0 == 0
true == 'true' // false ( 0 == Nan, 밑의 표를 보면 ToNumber로 변환)
null == false // false
```

![Untitled](mission2%2072510/Untitled.png)

## 4.2. 명시적 형 변환

### 4.2.1. To Number

다른 자료형을 숫자타입으로 변형하는 방법은 아래와 같다.

- **Number()**
    
    Number()는 **정수형과 실수형의 숫자**로 변환한다. 보통 문자형을 숫자형으로 변경할 때 사용한다. 숫자로 변환되지 않는 경우에는 NaN(Not a Number)을 반환한다.
    
    ```jsx
    Number(“12345”); //12345
    Number(“2”*2); //4
    ```
    
    null, false, 빈 문자열에 대해서는 0으로 표현한다. 그 외에는 1로 표현한다. array의 경우는 `Number()`함수에서 사용하는 0을 반환한다.
    
    ```jsx
    const falsy1 = null;
    Number(falsy1); // 0;
    
    const falsy2 = '';
    Number(falsy2); // 0;
    
    const falsy3 = false;
    Number(falsy3); // 0;
    
    const truthy1 = [];
    Number(truthy1); // 0;
    
    const truthy2 = true;
    Number(truthy2); // 1;
    
    const truthy3 = {};
    Number({}); // NaN;
    ```
    
- **parseInt()**
    
    parseInt()는 **정수형의 숫자**로 변환한다. 만약 문자열이 '숫자0'으로 시작하면 8진수로 인식하고, '0x, OX'로 시작한다면 해당 문자열을 16진수 숫자로 인식한다. 공백으로 시작하면 공백은 무시, 수가 아닌 문자로 시작하면 NaN을 반환한다. 띄어 쓰기로 여러 개의 수가 있다면 첫 번째 수만 바꾼다.
    
    ```jsx
    parseInt(“27”) //27
    parseInt(0033); //27
    parseInt(0x1b); //27
    parseInt(“ 2”); //2
    parseInt(“ 2ㅎ”); //2
    parseInt(“ ㅎ2”); //NaN
    ```
    
    > ❗️ parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환해주는 것이 특징이고, Number()은 문자열 전체가 숫자일 때 소수점까지 숫자 타입으로 가져올 수 있다
    > 
- **parseFloat()**
    
    parseFloat()는 **부동 소수점의 숫자**로 변환한다. parseInt()와는 달리 parseFloat()는 항상 10진수를 사용하며 공백으로 시작하면 공백은 무시, 수가 아닌 문자로 시작하면 NaN을 반환한다. 띄어 쓰기로 여러 개의 수가 있다면 첫번째 수만 바꾼다.
    
    ```jsx
    parseFloat(“!123”); //NaN
    parseFloat(“123.123456”); //123.123456
    parseInt(“123.123456”); //123
    parseFloat(“ 123.123456”); //123.123456
    parseFloat(“ a123.123456”); //NaN
    ```
    
- **단항연산자(unary-operators)로 숫자형 타입 변경**
    
    ```jsx
    +'1000'; // 1000
    +'-1000'; // -1000
    +'Infinity'; // Infinity
    -'1000'; // -1000
    +true; // 1
    +[]; /// 0
    +false; // 0
    +null; // 0
    +'';// 0
    ```
    

위 예제를 보면 단일 연산자를 이용한 숫자형 변환은 `Number`와 동일한 동작을 하는 것을 볼 수 있다. 단항 연산자는 자바스크립트 함수를 사용하지 않고 형변환을 할 수 있는 쉽고 효율적인 방법이다.

### 4.2.2. To String

- **toString()**
    
    주어진 값을 문자열로 변환 후 반환한다. toString()는 인자로 기수를 선택할 수 있다. 인자를 전달하지 않으면 10진수로 변환한다.
    
    ```jsx
    var trans = 100;
    trans.toString(); //”100"
    trans.toString(2); //”1100100"
    trans.toString(8); //”144"
    var boolT = true;
    var boolF = false;
    boolT.toString(); //”true”
    boolF.toString(); //”false”
    ```
    
- **toFixed()**
    
    toFixed()의 인자를 넣으면 인자값만큼 반올림하여 소수점을 표현한다.
    
    ```jsx
    var trans = 123.456789;
    var roundOff = 99.987654;
    trans.toFixed(); //”123"
    trans.toFixed(0); //”123"
    trans.toFixed(2); //”123.46"
    trans.toFixed(8); //”123.45678900"
    roundOff.toFixed(2); //”99.99"
    roundOff.toFixed(0); //”100"
    ```
    

### 4.2.2. To Boolean

자바스크립트에서는 Boolean타입으로 변경은 `Boolean()` 또는 부정연산자(!)를 사용하여 Boolean값을 만들어낸다. 부정연산자는 `!`을 사용하면 `Boolean()` 반대의 값을 리턴한다.

- **Boolean()**
    
    ```jsx
    Boolean(100); //true
    Boolean(“1”); //true
    Boolean(true); //true
    Boolean(Object); //true
    Boolean([]); //true
    
    Boolean(0); //false
    Boolean(NaN); //false
    Boolean(null); //false
    Boolean(undefined); //false
    Boolean( ); //false
    
    const numb1 = 0;
    Boolean(numb1); // false
    !!numb1; // false
    !numb1; // true
    ```
    

# 5. inline events vs event listener

우선 inline으로 이벤트를 등록하는 방법은 두가지가 있다.

```jsx
// code 1 : inline html
<button onclick="btnClick()">Click Me</button>

<script>
  function btnClick() {
    console.log("Button Clicked")
  }
</script>

// code 2 : inline javascript
<button id="myBtn">Click Me</button>

<script>
  var btn = document.getElementById("myBtn")
  btn.onclick = btnClick
  function btnClick() {
    console.log("Button Clicked")
  }
</script>
```

 첫번째는 HTML 태그에 바로 등록하는 법, 두번째는 JS내에서 태그에 identity를 준다음 `onClick` 메소드를 이용해서 등록하는 법이다. 

 아래 코드는  `addEventListener()`를 사용한 예시이다.

```jsx
<button id="myBtn">Click Me</button>

<script>
  function btnClick() {
    console.log("Button Clicked")
  }

  var btn = document.getElementById("myBtn")
  btn.addEventListener("click", btnClick, false)
</script
```

 `addEventListener()` 메서드는 주어진 이벤트가 요소에 전달될 때 호출할 함수를 지정한다.

## 5.1. 차이점

### 5.1.1 덮어쓰기

 inline은 덮어 써지므로 여러가지 이벤트를 등록할 수 없다. 반면  `addEventListener()`는 중복 이벤트 등록이 가능하다.

```jsx
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>

<script>
  function function1() {
    console.log("Function1")
  }
  function function2() {
    console.log("Function2")
  }
  function function3() {
    console.log("Function3")
  }
  function function4() {
    console.log("Function4")
  }

  var btn1 = document.getElementById("btn1")
  var btn2 = document.getElementById("btn2")

  btn1.onclick = function1
  btn1.onclick = function2

  btn2.addEventListener("click", function3, false)
  btn2.addEventListener("click", function4, false)
</script>

// result ---
// Function2
// Function3
// Function4
```

 위 코드를 보면 function1이 function2에 의해 덮어졌다.

## 5.1.2. capture

 `addEventListener()` 는 클릭 시 이 함수가 버블링으로 작동할지 캡쳐링으로 작동할지 설정할 수 있다. 메서드를 잘 보게 되면 `addEventListener("type", 리스너(작동될 함수), 캡쳐링을 쓸지)`가 들어가게 된다. 세 번째 parameter가 true일 경우 캡쳐링을 쓴다. false일 경우 버블링을 쓰며, default는 false이다. (캡쳐링 : HTML부터 target으로, 하위요소로 내려오면서 event를 실행하는 것, 버블링: 그 반대)

## 5.2. 결론

HTML inline , JS inline를 통해 이벤트를 등록 하면 scope가 제한적이고, 하나의 이벤트밖에 등록할 수 없으며, 가독성도 좋지 않기에 권장하지 않는 편이다. `addEventListener()` 사용이 더욱 바람직하다.

# 참고

[커밋 컨벤션](https://overcome-the-limits.tistory.com/entry/%ED%98%91%EC%97%85-%ED%98%91%EC%97%85%EC%9D%84-%EC%9C%84%ED%95%9C-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-git-%EC%BB%A4%EB%B0%8B%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)

[template literals](https://eblee-repo.tistory.com/38)

[template literals에 대해 알아보자](https://eblee-repo.tistory.com/38)

[자바스크립트의 형변환](https://velog.io/@yunsungyang-omc/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%ED%98%95%EB%B3%80%ED%99%98Type-Casting)

[인라인 이벤트 핸들러 vs addEventListener()](https://dillionmegida.com/p/inline-events-vs-add-event-listeners/)