# mission4.5

# 1. GC (Garbage Collecting)

 GC란 **쓸모 없어진 객체가 차지하는 메모리를 자동으로 해제**하는 것을 말한다. 하지만 언제 GC가 진행될지 예측하기 어렵기 때문에 (객체가 쓸모 없어지는 시점에 정확히 메모리 해제X) 개발자는 메모리 관리를 완전히 신경쓰지 않아서는 안된다. GC는 자동으로 실행되며 강제로 멈추거나 실행시킬 수 없다.

## 1.1. 예시

### 1.1.1. Primitive Type (Pass by value)

 자바스크립트 Primitive Type은 **숫자, 문자열, boolean, null, undefined, 심볼**이 있으며, 이 데이터들은 메모리를 한번 할당받으면 값이 변경되지 않는다.

```jsx
let num  // undefined
num = 80
num = 100
```

![1](https://user-images.githubusercontent.com/76227569/158980648-b4e502fd-a8c5-4b92-ac46-f879f28032ad.png)

출처 : [https://publizm.github.io/posts/javascript/Primitive_Reference](https://publizm.github.io/posts/javascript/Primitive_Reference)

 C에서는 변수에 값을 재할당하면 변수가 가리키고 있는 메모리주소의 값이 바로 변경된다. 그러나 자바스크립트에서는 값을 재할당하면 새로운 메모리 공간을 할당받아 값을 넣고, 변수가 가리키는 메모리주소를 변경한다. 이전 값은 더 이상 사용되지 않으므로 가비지 컬렉션 대상이 된다.

### 1.1.2. Object Type (Pass by reference)

Object Type은 Primitive Type을 제외한 것들로 **객체, 배열, 함수** 등이 있다. 객체를 할당한 변수는 **참조 값**을 값으로 갖는다. 참조 값이란 생성된 객체가 저장된 메모리 공간의 주소를 말한다.

```jsx
var person = {
  name: 'Jeon'
};
```

![2](https://user-images.githubusercontent.com/76227569/158981169-8baa4d27-d4a8-4df6-b4ec-97a023a9e0d9.jpg)

출처 : [https://publizm.github.io/posts/javascript/Primitive_Reference](https://publizm.github.io/posts/javascript/Primitive_Reference)

객체를 가리키는 변수를 다른 변수에 할당하면 **원본의 참조 값**이 복사되어 전달된다. 이를 **참조에 의한 전달(Pass by reference)**라 한다.

```jsx
var person = {
  name: 'Lee'
};

// 참조 값을 복사
var copy = person;
```

![3](https://user-images.githubusercontent.com/76227569/158981285-9f76bf5f-e1c6-479c-8fd0-c8c374cc7cf8.jpg)

출처 : [https://publizm.github.io/posts/javascript/Primitive_Reference](https://publizm.github.io/posts/javascript/Primitive_Reference)

위 그림에서 원본 person과 사본 copy는 모두 동일한 객체를 가리키고 있다. 이것은 두개의 식별자가 하나의 객체를 공유한다는 것을 의미한다. 따라서 원본 또는 사본 어느 한쪽이 객체를 변경하거나 추가 또는 삭제하게되면 **서로 영향을 주고 받는다.**

## 1.2. 알고리즘

### 1.2.1. Reference-Counting

 이 알고리즘은 어떠한 값에 대해서 어디에서도 참조(reference)하지 않고 있다면 GC는 이 값을 필요하지 않은 값으로 간주하고 이 값을 제거한다.

```jsx
let x = {
  a: {
    b: 2
  }
}
```

![rc1](https://user-images.githubusercontent.com/76227569/158981394-d2525f4b-b67d-42a0-a694-c66e3dfac079.png)

출처 : [https://velog.io/@bumsu0211/JavaScript-Garbage-Collection](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

 할당된 모든 메모리가 참조당하고 있는 상태로, 가비지가 없는 상태이다. **전역 변수는 가비지 컬렉션의 대상이 아니므로 x에 대한 카운팅을 제외**한다.

```jsx
let y = x
x = 1
```

![rc2](https://user-images.githubusercontent.com/76227569/158981402-861c16f2-88e6-437e-8a62-8c7a475b3f4f.png)

출처 : [https://velog.io/@bumsu0211/JavaScript-Garbage-Collection](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

 변수 y에 변수 x를 대입하여 객체의 메모리 주소를 연결했다. 변수 x에는 1을 할당하여 객체와의 연결을 끊은 상태이다. 현재 모든 메모리의 참조가 아직 가비지가 없다.

```jsx
let z = y.a.b
y = 'bumsu'
```

![rc3](https://user-images.githubusercontent.com/76227569/158981400-e744296c-f3d2-4f10-b9df-4e6e20d8ab2c.png)

출처 : [https://velog.io/@bumsu0211/JavaScript-Garbage-Collection](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

 변수 z에 y.a.b를 대입하면 객체 b의 메모리 주소가 연결된다. 변수 y에는 문자열을 할당하여 객체 a와의 연결을 끊은 상태이다. **객체 a를 참조하는 변수가 하나도 없기 때문에 가비지로 인식하고 메모리 공간을 해제**한다.

```jsx
z = null
```

![rc4](https://user-images.githubusercontent.com/76227569/158981399-2c483903-50eb-450f-aee1-94b3d03db13a.png)

출처 : [https://velog.io/@bumsu0211/JavaScript-Garbage-Collection](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

 변수 z에 null을 대입하여 객체 b와의 연결을 끊은 상태이다. 객체 b가 가비지로 인식되어 메모리 공간이 해제되고, 그에 따라 숫자 2도 메모리 해제된다.

**순환 참조**

 두개의 객체가 서로 참조하면 순환 구조가 생성되어, 가비지로 인식되지 않는다.

```jsx
function f() {
	const x = {}
	const y = {}
	x.a = y
	y.a = x
}

f()
```

![순환2](https://user-images.githubusercontent.com/76227569/158981589-51ce35f1-3e55-4cae-a28b-4613cc215e45.png)

출처 : [https://velog.io/@bumsu0211/JavaScript-Garbage-Collection](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

 객체에 속성 a를 추가하고 서로를 참조하는 상태이다. 클로저와 같이 함수가 종료된 후에도 변수에 접근할 수 있는 형태는 아니다. 함수 f의 컨텍스트가 끝나는 순간에 지역변수 x, y의 메모리를 해제시켜주어야 하는데, x.a, y.a에 의한 참조 카운팅이 되어 **가비지로 분류할 수 없다.**

### 1.2.3. Mark-and-sweep

 위의 reference-counting의 문제점으로는 불필요한 값임에도 불구하고 어디에선가 참조가 걸려있다면 이에 대한 메모리를 해제하지 않는다는 문제점이 있었다. 반면에 Mark-and-sweep 알고리즘은 이 값이 참조되고 있는 값인지에 중점을 두지않고 **도달가능성(reachablility)**
에 중점을 둔다. (어떠한 값이 참조된다고해서 root에서부터 도달가능한 것은 아님)

 **도달 가능성이란 자바스크립트의 root라는 글로벌 object에서부터 시작하여 참조되는가에 대한 여부이다. 다시말해 root에서 부터 해당 값까지 도달이 가능한가에 대한 여부이다.**

 따라서 어떤 값에 대한 참조가 없는 경우는 당연히 도달이 불가능하기 때문에 메모리가 해제되어야 하는 값으로 여겨지고, 참조 되고 있다고 하더라도 root로부터 도달할수 없다고 여겨진다면 처리된다.

실행 컨텍스트가 소멸하는 순간, 접근하기 불가능한 객체가 되기 때문에 **순환 참조는 발생하지 않는다.** 2012년부터 모든 최신 브라우저들이 Mark-and-Sweep 알고리즘으로 가비지 컬렉션을 진행한다.

```jsx
function Couple() {
    const jane = {};
    const sam = {};

    // jane.bf는 sam을 참조한다
    jane.bf = sam;

    // sam.gf는 jane을 참조한다
    sam.gf = jane;

    return 'circular';
}

Couple();
```

예시에서 `Couple()` 이라는 함수 가 호출된 후 `'circular'`값이 return 되고 끝난 후에는 더이상 root에서 jane과 same에 도달할 수 없기 때문에 해당 값들은 GC에 의해서 메모리가 해제됨을 알 수 있다.

![https://blog.kakaocdn.net/dn/bEkhNs/btqEoAhx6q0/x57jk6pga9KpkllY3ysHyk/img.gif](https://blog.kakaocdn.net/dn/bEkhNs/btqEoAhx6q0/x57jk6pga9KpkllY3ysHyk/img.gif)

# 2. insertAdjacentHTML vs appendChild vs innerHtml

 JS에는 Element.innerHTML, Element.insertAdjacentHTML, Node.appendChild 등 유사하면서도 다른 여러 메서드가 있메서드를 살펴보기 전에 Element와 Node가 무엇인지부터 체크하자.

## 2.1. EventTarget vs Element vs Node

![2번 비교](https://user-images.githubusercontent.com/76227569/158981758-311b3c04-6967-43e3-bd8b-c792b30380c6.png)

### 2.1.1. EventTarget

 EventTarget 인터페이스는 이벤트를 수신할 수 있고, 수신한 이벤트에 대한 수신기(listener)를 가질 수 있는 객체가 구현하는 인터페이스이다. EventTarget의 자식으로 Node나 Window가 있다. 주요 메서드로는 `EventTarget.addEventListener()`, `EventTarget.removeEventListener()`, `EventTarget.dispatchEvent()` 등이 있다.

### 2.1.2. Node

- Node는 부모인 EventTarget으로부터 속성을 상속받았다.
- Node는 여러 가지 DOM 타입들(Document, Element, CharacterData, DocumentFragment, DocumentType)의 부모로서, 여러 DOM 타입들은 Node로부터 속성을 상속받아 비슷하게 처리될 수 있다.
- Node는 속성이나 메소드가 적합하지 않은 경우에 null을 반환할 수 있다.
- 주요 속성으로는 `Node.childNodes`, `Node.parentNode`, `Node.firstChild`, `Node.lastChild`, `Node.nextSibling`, `Node.previousSibling`, `Node.textContent`이 있다.
- 주요 메소드로는 `Node.appendChild()`, `Node.cloneNode()`, `Node.hasChildNodes()`, `Node.insertBefore()`, `Node.removeChild()`, `Node.replaceChild()`
    
    > 참고로 DOM(문서 개체 모델, Document Object Model)은 자바스크립트 Node 개체의 계층화된 트리다.
    > 

### 2.1.3. Element

- Element 예시 : `<body>`, `<a>`, `<p>` 등과 같은 노드
    
    > 참고로 Element 노드는 아니지만 Node 중에 window.document 등과 같은 Document 노드, 줄바꿈과 공백을 포함한 텍스트인 Text 노드, class="cool"과 같은 Attribute 노드 등도 있다)
    > 
- Node와 EventTarget은 Element의 부모이므로, Element는 Node와 EventTarget의 속성을 상속한다.
- Element는 Document 안의 모든 객체가 상속하는 제일 범용적인 클래스로서 공통 메서드와 속성만 갖고 있다. Element의 속성을 상속받은 [HTMLElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)나 [SVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement)도 있다.
- 주요 속성으로는 `Element.classList`, `Element.id` `Element.innerHTML`, `Element.outerHTML` 등이 있다.
- 주요 메서드로는 `EventTarget.addEventListener()`, `Element.insertAdjacentElement()`, `Element.insertAdjacentHTML()`, `Element.querySelector()`, `Element.remove()` 등이 있다.

## 2.2. innerHTML

- innerHTML은 Element의 **속성**이며, Element 내에 포함된 HTML(또는 XML) 마크업을 가져오거나 설정한다.

```jsx
const content = element.innerHTML;

element.innerHTML = htmlString;
```

- 값은 `DOMString`이다.
- innerHTML 값을 설정할 때, 다음 과정을 거쳐서 작동한다.
    
    > 지정한 값은 HTML 또는 XML(문서 타입에 따라)로 파싱되어, DocumentFragment 객체가 새 요소에 대한 새로운 노드 DOM 노드 집합을 나타냅니다.
    > 내용이 대체되는 요소가 <template> 요소 인 경우, <template> 요소의 content (en-US) 속성(attribute)은 1단계에서 작성한 새 DocumentFragment 로 대체됩니다.
    > 다른 모든 요소의 경우, 요소의 내용은 새 DocumentFragment 의 노드로 대체됩니다.

## 2.3. insertAdjacentHTML()

- insertAdjacentHTML() 메서드는 HTML이나 XML 같은 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가한다. innerHTML 등의 메서드들보다 삽입하려는 위치를 더 세밀하게 다룰 수 있다.
- 이미 사용중인 element는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다. innerHtml보다 작업이 덜 드므로 더 빠르다.

```jsx
element.insertAdjacentHTML(position, text);
// postion에는 beforebegin, afterbegin, beforeend, afterend가 있다.
// text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이다.
```

```jsx
// position의 예시
<!-- [beforebegin] : element 앞에 -->
<p>
<!-- [afterbegin] : element 안에 가장 첫번째 child -->
foo
<!-- [beforeend] : element 안에 가장 마지막 child -->
</p>
<!-- [afterend] : element 뒤에 -->
```

## 2.4. appendChild()

- appendChild() 메서드는 한 노드 개체를 DOM 트리인 특정 부모 노드의 자식 노드 리스트 중 마지막 자식으로 붙인다.
- 만약 인자로 주어진 노드가 이미 문서에 존재하는 노드를 참조하고 있다면 appendChild() 메소드는 해당 노드를 현재 위치에서 새로운 위치로 이동시킨다.(만약 인자로 주어진 노드가 이미 부모를 가지고 있다면 우선 그곳에서 삭제되고 새로운 위치로 이동된다. 따라서 문서에 존재하는 노드를 다른 곳으로 붙이기 전에 부모 노드로부터 지워버릴 필요가 없다.)
- 한 노드는 문서상의 두 지점에 동시에 존재할 수 없다.
- appendChild()와 비슷한 메서드로서 Node.insertBefore()가 있다. Node.insertBefore(삽입될 노드, 삽입될 노드가 앞으로 올 참조 노드) 메서드는 두 번째 매개변수가 전달되지 않을 경우, appendChild()처럼 동작한다.

```jsx
element.appendChild(node);
// 인자로 넣을 node로는 document.createElement(tagName)로 새로 만들어서 사용하거나, 이미 문서에 존재하는 노드를 참조할 수도 있다.
```

## 2.5. innerHTML, innerAdjacentHTML, appendChild 성능 비교

- innerHTML이 비교적 느리고, insertAdjacentHTML이 비교적 빠른 편이다.
- innerHTML은 무겁고 비싼 대가를 치르는 HTML 파서를 호출하기 때문에, 만약 텍스트 노드 정도 삽입하는 경우에는 textContent를 사용하는 것이 낫다.

# 3. data binding (2 way, 1 way)

 **데이터 바인딩**이란 두 데이터 혹은 정보의 소스를 모두 일치시키는 기법이다. 즉 화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치시키는 기법이다.

 데이터 바인딩은 단방향과 양방향으로 나뉘는데, **양방향 바인딩**의 경우, 사용자의 입력값이 곧바로 코드 상의 변수에 바인딩 될 수 있지만 **단방향 바인딩**의 경우 적절한 Event를 통해서만 코드 상 변수에 데이터 값이 담긴다.

![바인딩](https://user-images.githubusercontent.com/76227569/158981761-4d42ef68-41ac-4bb8-aa63-38ff2e963866.jpg)

출처 : [https://velog.io/@milkyway/데이터-바인딩-Data-Binding](https://velog.io/@milkyway/%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%94%EC%9D%B8%EB%94%A9-Data-Binding)

 그럼 "양방향 데이터 바인딩이 좋지 않은가??" 생각이 든다면 무조건 그렇지는 않다. 단방향 바인딩으로 표현 가능한 요소를 굳이 양방향으로 활용 시 불필요한 리소스 확보로 인해 성능 저하에 영향을 끼칠 수 있다.

# 4. defer

<script> 태그의 defer 속성은 페이지가 모두 로드된 후에 해당 외부 스크립트가 실행됨을 명시한다. defer 속성은 불리언(boolean) 속성으로 명시하지 않으면 false 값을 가지게 되고, 명시하면 true 값을 가지게 된다.

# 5. javascript module

 프로그래밍에서 `모듈`이란 **프로그램을 구성하는 구성요소의 일부**이다.

 분리된 파일 각각을 '모듈'이라고 부르고, 보통 클래스 하나 혹은 특정한 목적을 가진 복수의 함수로 구성된 라이브러리 하나로 구성된다.

 이렇게 파일을 모듈화 하여 관리하면 다음과 같은 장점이 있다.

1. 프로그램의 효율적인 관리 및 성능 향상
2. 전체적인 소프트웨어 이해의 용이성 증대 및 복잡성 감소
3. 소프트웨어 디버깅, 테스트, 통합, 수정 시 용이성 제공
4. 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선됨
5. 오류의 파급효과를 최소화
6. 모듈의 재사용 가능으로 개발과 유지보수가 용이

---

 자바스크립트에서 모듈은 `export`와 `import`를 통해 불러온다.

 **export** 지시자를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근할 수 있다. (모듈 내보내기)

```jsx
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

 **import** 지시자를 사용하면 외부 모듈의 기능을 가져올 수 있다. (모듈 가져오기)

```jsx
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // 함수
sayHi('John'); // Hello, John!
```

 브라우저에서 import/export 지시자를 사용하려면 `<script type="module">` 같은 속성이 필요하다.

 **default export**를 사용하게 되면, import 할 시, 중괄호 없이 원하는 이름으로 import 하여 사용할 수 있습니다.

그리고 유의할 점은 하나의 모듈에서는 하나의 default export 만 허용한다.

```jsx
// calc.js 에서
export default function Add(num1, num2) {
return num1 + num2;
}
```

```jsx
// main.js 에서
import renameAdd from './calc.js';

functioninit() {
const result = renameAdd(1, 2);
    console.log(result);
}

init()

// 결과 : 3
```

 위 코드에선 main.js 에서 calc.js 에서 사용된 함수이름인 Add 대신 renameAdd 로 바꿔 import 하여 사용하였다.

# 6. 참고

[원시 값과 객체의 비교](https://publizm.github.io/posts/javascript/Primitive_Reference)

[자바스크립트 가비지 컬렉션 (JavaScript Garbage Collection)](https://velog.io/@bumsu0211/JavaScript-Garbage-Collection)

[자바스크립트의 가비지컬렉션(Garbage Collection)](https://sustainable-dev.tistory.com/158)

[[DOM] innerHTML vs insertAdjacentHTML vs appendChild 비교](https://velog.io/@jangws/innerHTML-vs-insertAdjacentHTML-vs-appendChild-%EB%B9%84%EA%B5%90)

[데이터 바인딩 (단방향 바인딩, 양방향 바인딩)](https://authorkim0921.tistory.com/13)

[자바스크립트의 Data Binding](https://blog.hyunmin.dev/15)

[Javascript | Module (자바스크립트 모듈)에 대하여](https://yeonfamily.tistory.com/9)

[[JavaScript] 모듈이란?](https://velog.io/@syoung125/%EA%B0%9C%EB%85%90%EA%B3%B5%EB%B6%80-1.-Javascript)
