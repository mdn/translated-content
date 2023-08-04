---
title: 프록시 서버
slug: Glossary/Proxy_server
---

프록시 서버란 인터넷 상의 여러 네트워크들에 접속할 때 중계 역할을 해주는 프로그램 또는 컴퓨터를 말한다. 월드 와이드 웹(World Wide Web) 상의 컨텐츠에 쉽게 접근할 수 있도록 도와준다. 프록시는 리퀘스트를 가로챈 뒤(intercepts) 리스폰스를 돌려준다. 이렇게 가로챈 리퀘스트를 전달해줄 수도, 아닐 수도(예시. 캐시인 경우), 수정할 수도 있다(예시. 서로 다른 두 네트워크 간의 경계에서 헤더를 바꾸는 경우)

프록시는 사용자의 로컬 컴퓨터에 존재할 수도 있고, 인터넷 상에서 사용자의 컴퓨터와 목표 서버 사이 그 어느 곳에든 존재할 수 있다. 일반적으로 크게 주로 2가지 종류의 프록시 서버가 존재한다.

- 포워드 프록시(forward proxy)는 인터넷 상에서 어디로든지 리퀘스트를 전송해주는 프록시이다.
- 리버스 프록시(reverse proxy)는 인터넷에서 리퀘스트를 받으면, 내부망 내의 서버로 전송해준다.

## Learn More

- [Proxy servers and tunneling](/ko/docs/Web/HTTP/Proxy_servers_and_tunneling)
- [Proxy server](https://en.wikipedia.org/wiki/Proxy_server) on Wikipedia
