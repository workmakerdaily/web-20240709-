# Markdown

### 마크다운이란?
텍스트 기반의 마크업 언어로 읽고 쓰기 편하게 구성되어있음.  
특수기호와 문자를 활용하여 간단한 구조를 작성할 수 있음.  
HTML과 호환됨  

##### 장단점
장점  
1. 간단함  
2. 특별한 도구가 필요하지 않음  
3. 텍스트로 저장되기 때문에 용량활용이 높음  

단점  
1. 표준이 없음  
2. 모든 HTML 요소를 대신하지 못함  

### 헤더
- HTML Header와 동일한 것으로 문서의 제목을 나타냄 
- h1 ~ h6 까지의 제목을 표현할 수 있음
- '#'이라는 기호로 헤더를 표시  
# Header1 (HTML - h1)  
## Header2(HTML - h2)  
### Header3(HTML - h3)  
##### Header6(HTML - h6)

### 블록 인용
- 인용구를 표현할 때 사용
- '>'이라는 기호를 사용하여 표현

> 첫번째 인용구
> > 두번째 인용구

### 리스트
- 나열된 항목을 나타낼 때 사용
- 순서가 존재하는 리스트(HTML ol요소), 순서가 존재하지 않는 리스트(HTML ul)
- '1.'기호로 순서가 존재하는 리스트를 표현
- '*', '+', '-'기호로 순서가 존재하지 않는 리스트를 표현

1. apple
2. banana
3. cocoao

- apple
- banana
- cacao

+ apple
+ banana
+ cacao

### 코드
- 코드를 작성하기 위한 영역을 지정
- HTML code 요소와 동일
'```'기호로 표현

```
public static void main(String args[] args) {
    system.
}
```

시작하는 '```' 뒤에  
표현하고자하는 언어를 지정하면  
문법 강조를 할 수 있음

```java
public static void main(String args[] args) {
    system.
}
```

### 구분선
- HTML hr 요소와 동일한 것
- 영역을 구분하고자 할 때 사용
- '* * *', '***', '*****', '- - -', '----------------------'기호로 표현 가능

***
- - -

### 링크
- HTML a 요소와 동일한 것
- '[키워드][링크의 구부자]'
- '[링크의 구분자]: url'

[Naver][naverid]  
[네이버][naverid]

[naverid]: http://naver.com

### 텍스트 강조
- 기울임꼴, 굵은글씨, 취소선을 표현
- '*', '_' 기호로 기울임꼴 표현
- '**', '__'기호로 굵은 글씨 표현
- '~~' 기호로 취소선 표현

내가 그린 *기린 그림*은 ~~잘~~ 그린 **기린 그림**

### 이미지
- HTML img 요소와 동일한 것
- '![이미지 설명](이미지 경로)'
![강아지](data:image/webp;base64,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)

### HTML 사용
- 마크다운 대신 HTML 사용 가능
<h2 style="color: red">HTML 텍스트</h2>
