# mission4

# mission3 코드의 렌더링 과정

 렌더링 과정은 이전에 작성한 문서로 대체한다.

[렌더링 과정](https://www.notion.so/efdb996029e840a2bc5879fcd3681c15)

 브라우저의 렌더링 과정은 주소 입력 → html 파일 다운로드 → css, js 다운로드 → DOM Tree, CSSOM Tree 생성 → Render Tree 생성 → 레이아웃 → 페인팅  → JS 실행 단계로 진행된다.

크롬 개발자도구를 통하여 렌더링 과정을 측정해본 결과 다음과 같았다.

![Untitled](https://user-images.githubusercontent.com/76227569/157434223-1f5d0e20-4d25-48dc-a1f4-cd88d468a9bc.png)

 FPS 위에 빨간색 막대는 표시되지 않았고, cpu 차트는 클릭 버튼을 누를 때 가장 가득 찼다.

 간단한 페이지인 탓인지 지표가 많이 나타나지는 않았다. 맨 밑 Summary를 보면 렌더링 비율이 높지는 않았다.

![Untitled (2)](https://user-images.githubusercontent.com/76227569/157434096-0b1e49e5-c144-4be9-adf8-bd0d9f6106a6.png)

위와 같이 렌더링은 버튼 클릭 이벤트가 발생할 때 가장 비중을 많이 차지했다.
