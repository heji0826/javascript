# mission3

# 0. destructuring, rest operation, spread operator

## 0.1. destructuring (구조 분해 할당)

 **구조 분해 할당** 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다. 구조 분해 할당은 Perl이나 Python 등 다른 언어가 가지고 있는 기능이다.

```jsx
let array = [1, 3, 5, 6];
let a = array[0];
let b = array[1];
//1
console.log(a);

//3
console.log(5);
```

 위 코드에 구조분해할당을 이용하면 훨씬 더 편리하다.

```jsx
let [a, b, c, d] = [1, 3, 5, 6];

//1
console.log(a);
```

 위 코드처럼 더욱 직관적으로 코드를 짤 수 있다.

```jsx
//d 변수명에 값이 들어오지 않으면 기본값 10
let [a, b, c, d = 10] = [1, 3, 5];

//10
console.log(d);
```

 또한 개수를 모두 다 맞추지 않아도 기본값 지정을 하여 만들 수 있다.

### 일부 반환 값 무시

 다음과 같이 필요하지 않은 반환 값을 무시할 수 있다.

```jsx
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3
```

### 객체

 객체 또한 기본값을 설정할 수 있다.

```jsx
let { name = "shin", age } = { age: 27 };
//shinconsole.log(name);
```

 이렇게 해당 키값이 없으면 설정한 기본값으로 출력해낼 수 있다.

 또한, 변수명을 받아서 간편하게 객체를 만들어낼 수도 있다.

```jsx
let name = "shin",
age = 28;

let obj = {name : name, age : age}

//key값과 value값이 동일하면 이렇게 하나로도 생략이 가능
let obj2 = { name, age };

//{name: "shin", age: 28}
console.log(obj);
//{name: "shin", age: 28}
console.log(obj2);
```

 또한, 이렇게 많은 키밸류도 한번에 구조분해할당이 가능하다.

```jsx

      let person = {
        name: {
          lastName: "shin",
          firstName: "hoon",
        },
        body: {
          height: 171,
          weight: 66,
        },
        hobby: ["영화보기", "기타치기", "여행가기"],
      };

      let {
        name: { lastName, firstName },
        body: { height, weight },
        hobby: [취미1, 취미2, 취미3],
      } = person;

      //shin
      console.log(lastName);
      //171
      console.log(height);
      //영화보기
      console.log(취미1);
```

## 0.2. rest parameter

 함수의 마지막 매개변수 앞에 `...`를 붙이면 모든 후속 매개변수를 js 배열에 넣도록 지정한다. 마지막 매개변수만 rest parameter로 설정할 수 있다.

 함수 정의에는 하나의 `...` 만 존재할 수 있다.

```jsx
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// 콘솔 출력:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

### rest parameter vs arguments

 arguments 객체는 실제 배열이 아니다. 그러나 rest parameter는 `sort`, `map`, `forEach`, `pop` 등의 메서드를 직접 적용할 수 있다. arguments는 유사 배열 객체로 간단하게 순회가능한 특징이 있고 length 값을 알 수 있지만, Array 오브젝트의 메서드를 사용할 수 없다.

## 0.3. spread operator

 Spread 연산자는 연산자의 대상 배열 또는 이터러블(iterable)을 "개별" 요소로 분리한다.

```jsx
// 배열
console.log(...[1, 2, 3]); // -> 1, 2, 3
// 문자열
console.log(...'Helllo');  // H e l l l o
// Map과 Set
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3
```

 함수의 파라미터로 사용하려면 밑의 코드와 같이 쓰면 된다.

```jsx
function foo(x, y, z) {
	console.log(x); //1
	console.log(y); //2
	console.log(z); //3
}
const arr = [1, 2, 3];
foo(...arr); // Array를 받아 각 매개변수로 전달됨
```

### 배열

```jsx
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]
```

 `...` 은 배열 리터럴의 어디에서든 사용될 수 있으며 여러번 사용될 수도 있다.

```jsx
var arr = [1, 2, 3];
var arr2 = [...arr]; // arr.slice() 와 유사
arr2.push(4);

// arr2 은 [1, 2, 3, 4] 이 됨
// arr 은 영향을 받지 않고 남아 있음
Copy to Clipboard
```

위 코드처럼 배열 복사도 가능하다.

### rest vs spread

 rest는 함수 선언문의 파라미터에 `...`를 이용해 받으면 배열로 만들어서 사용하는 것이고, spread는 함수호출문의 파라미터에 `...`를 이용해서 호출하면 배열이 해당 매개변수로 각각 매핑되는 것이다.

 rest에서는 선언에서 `...`를 제일 뒤에만 써야하지만, spread에서는 중간중간 사용해도 상관없다.

# 1. for / forEach

 `for` 루프는 범용 제어 구조이며 `forEach` 루프는 Array의 prototype을 상속받은 객체에만 적용 할 수있는 향상된 for 루프이다.

 `for` 루프를 사용하여 특정 요소 집합을 검색 할 수 있지만, `forEach` 루프는 그렇지 않다. 또한 `for` 루프는 `foreach` 루프보다 읽고 쓰기가 더 어렵다.

 또한 for loop는 `continue` 나 `break` 로 중간에 건너뛰기 및 종료가 가능하지만, `forEach`는 중간에 끊을 방법이 없다.  또한 for loop는 `continue` 나 `break` 로 중간에 건너뛰기 및 종료가 가능하지만, `forEach`는 `break`이나 `continue`로 끊을 수 없다. 또한 `forEach`는 return값을 받지 못한다. `forEach`에 `break`를 걸기 위해서는 예외처리를 통해서 예외를 throw하여 강제로 루프문을 벗어나게 하는 방법을 써야 한다.
 ```jsx
var arr = [1,2,3,4,5,6,7,8,9,10]; 
try{
  arr.forEach(function(c){
    console.log(c); 
      if(c==3)
        throw new Error("stop loop"); // 에러를 throw하면 강제로 루프에서 벗어나서 catch로 가게 된다. 
  })
}catch(e){ 
} 
// 결과 : 1, 2, 3
```

### for in / for of

 `for in`은 Object에 있는 key에 차례로 접근하는 데 사용되는 반복문이다. Array에도 사용할 수도 있지만 일반적으로 Object를 제외한 객체에는 사용하지 않는 것이 좋다. 왜냐하면 `for in`으로 순회를 하게 되면 해당 요소뿐 아니라 prototype chain을 따라 확장 속성들도 함께 순회하기 때문이다.

```jsx
const object = {
  a: 1,
  b: 2,
  c: 3
};

Object.prototype.foo = function() {
  return 0;
};

for (const key in object) {
  console.log(key, object[key]);
}

// a 1 b 2 c 3 foo function()...
```

 object의 요소뿐 아니라 Object의 prototype으로 만들어 둔 `foo` 함수까지 함께 순회하는 모습을 볼 수 있다. 이러한 이유 때문에 `for in`은 Object의 key를 순회하기 위해 불가피하게 사용하는 것이 아니라면 사용하지 않는 것이 좋다. Object를 `for in`이 아닌 다른 방법으로 순회하고 싶다면, Object의 내장 메소드인 `keys()`를 사용하면 된다.

 `for of`는 이터러블한 객체의 순회를 도와주는 반복문이다. 때문에 Array만 반복할 수 있는 `forEach`와 다르게, 내부에 [Symbol.iterator]를 가진 객체라면 어떤 객체든 순회할 수 있다. 하지만 iterable하지 않은 일반 Object에는 사용할 수 없다.

```jsx
const gen = function*() {
  yield 1;
  yield 2;
  yield 3;
};

for (const value of gen()) {
  console.log(value);
}

// 1 2 3
```

# 2. async / defer

## 2.1. async

![1](https://user-images.githubusercontent.com/76227569/157412277-a01e1cd0-1fe3-40bf-b3d5-0e3b38cb7a32.png)

  `async` 스크립트는 **DOM 렌더 과정을 방해하지 않도록 병렬로 로드**한다. 이는 브라우저가 DOM을 구성하는 동시에 백그라운드에서 스크립트를 불러올 수 있음을 의미한다. 즉 `async` 속성을 적용하면 스크립트를 불러오는 과정에서 DOM 렌더를 차단하지 않도록 보장한다.

 하지만 `async` 스크립트는 **오직 파일을 불러오는 것만 병렬로 실행한다는 것**이 중요하다. 파일의 로딩을 마치게 된다면, 그 즉시 DOM 렌더를 멈추고 `async` 방식으로 불러온 스크립트 파일의 해석을 시작한다. 때문에 `async` 속성으로 파일을 불러온다고 해도, 스크립트의 해석이 얼마나 오래 걸릴지는 스크립트의 파일의 오버헤드에 달려 있다. 따라서 DOM에 접근하는 스크립트를 `async` 방식으로 불러오는 것은 권장되지 않는다.

 이러한 특성 때문에 `async` 스크립트는 **실행 순서가 보장되지 않는다**.

```jsx
<!-- large.js 는 로드되는데 5초가 걸립니다 -->
<script src="large.js" async></script>

<!-- small.js 는 로드되는데 1초가 걸립니다 -->
<script src="small.js" async></script>
```

 위의 예시처럼 불러오는데 서로 다른 시간이 걸리는 `async` 스크립트가 있다면, 먼저 로드가 되는 스크립트가 먼저 실행된다. 스크립트의 실행 순서를 조정할 수 없기 때문에, 만약 두 스크립트가 서로 의존성이 있다면 제대로 동작하지 않을 수 있다.

때문에 `async` 스크립트는 DOM에 직접 접근하지 않거나, 다른 스크립트에 의존적이지 않은 스크립트들을 독립적으로 실행해야 할 때 효과적이다.

## 2.2. defer

![2](https://user-images.githubusercontent.com/76227569/157412342-b8ec116b-49ff-4dc1-9661-0cf3834a35f1.png)

 `defer` 스크립트는 역시 `async` 와 비슷하게 동작한다. `defer` 스크립트 역시 DOM 렌더를 방해하지 않고 병렬로 로드한다. 하지만 로드가 완료된 후 즉시 그 내용이 실행되는 `async` 스크립트와는 다르게, `defer` 스크립트는 **모든 DOM이 로드된 후에야 실행**된다.

 또한 `defer` 스크립트는 **선언한대로 실행 순서가 보장된다**.

 실제로 더 빨리 로드되는 스크립트가 있다고 하더라도, 실행은 항상 (스크립트 파일을 제외한 DOM 구성이 끝난 이후에) 선언한 순서대로 실행된다.

 이 때문에 기본적으로 DOM의 모든 엘리먼트에 접근할 수 있고, 실행 순서도 보장하기 때문에 가장 범용적으로 사용할 수 있는 속성이다. 또한 스크립트 파일끼리의 의존성이 있는 경우에도 사용하기 좋다.

## 2.3. 정리

 `async` 옵션으로 다수의 `script` 파일들을 다운로드 받게 되면 정의된 `script`순서에 상관없이 다운로드 된 파일을 우선적으로 실행하기 때문에 JS파일이 순서에 의존적이라면 문제가 생길 수 있다.

 반면, `defer` 같은 경우는 모든 `script` 파일들이 다운로드 된 이후에 실행되기 때문에 훨씬 안전하다.

- DOM을 따라 반드시 순서대로 실행되어야 한다면 `<script>`
- DOM이나 다른 스크립트에 의존성이 없고, 실행 순서가 중요하지 않은 경우라면 `<script async>`
- DOM이나 다른 스크립트에 의존성이 있고, 실행 순서가 중요한 경우라면 `<script defer>`

# 3. dataset

 자바스크립트에서는 dataset 속성을 통해 사용자 정의 속성값에 쉽게 접근할 수 있다.

```jsx
문서객체선택.dataset.속성명;
문서객체선택.dataset.[속성명];
```

 위 형태로 사용하며, 속성명이 계속 붙어 있는 경우 카멜표기법으로 작성해야 한다.

```jsx
<body data-about="Elephants" data-order-state"new">

<script>
	console.log(document.body.dataset.about); // Elephants
	console.log(document.body.dataset.orderState); // new
</script>
```

 위 예시처럼 요소에 이름이 “data-about”인 속성이 있다면 elem.dataset.about을 사용해 값을 얻을 수 있고, data-orser-state처럼 여러 단어로 구성된 속성은ㄴ 카멜 표기법으로 변환해 사용할 수 있다.

# 참고

[구조 분해 할당](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[rest parameter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

[spread operator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[for 루프와 forEach 루프의 차이점](https://ko.strephonsays.com/for-loop-and-vs-foreach-loop-1781#menu-1)

[[JS] forEach, for in, for of의 차이](https://n-log.tistory.com/39)