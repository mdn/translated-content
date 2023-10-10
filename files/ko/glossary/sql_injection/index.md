---
title: SQL 인젝션 (SQL Injection)
slug: Glossary/SQL_Injection
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

SQL 주입은 사용자 입력의 유효성을 검사하지 못하는 웹 앱을 활용합니다. 해커는 백엔드 데이터베이스에서 실행하기 위해 웹앱을 통해 SQL 명령을 악의적으로 전달할 수 있습니다.

SQL 주입은 데이터베이스에 대한 무단 접근을 얻거나 데이터베이스에서 직접 정보를 검색할 수 있습니다. 많은 데이터 침해는 SQL 주입으로 인해 발생합니다.

[![가장 일반적인 취약점의 원형 차트: SQL 주입은 취약점의 50%를 담당하고, 크로스 사이트 스크립팅은 취약점의 42%를 담당하고, 소스 코드 공개는 취약점의 7%를 담당합니다](sql_inj_xss.gif)](https://cdn.acunetix.com/wp_content/uploads/2010/09/sql_inj_xss.gif)

## 작동 방식

![사용자 이름 및 비밀번호 필드가 포함된 로그인 양식의 스크린샷](updates_loginscreen.png)

사용자 이름과 비밀번호를 입력한 후 GUI 뒤에서 SQL 쿼리는 아래와 같이 작동합니다.

```sql
"SELECT Count(*) FROM Users WHERE Username=' " + txt.User.Text+" ' AND Password=' "+ txt.Password.Text+" ' ";
```

이제 사용자가 사용자 이름을 admin, 비밀번호를 passwd123을 입력한다고 가정하고, 로그인 버튼을 클릭하면 SQL 쿼리가 아래와 같이 실행됩니다.

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' passwd123 ' ";
```

자격 증명이 정확하면, 사용자의 로그인이 허용되므로, 매우 간단한(따라서 안전하지 않은) 메커니즘입니다. 해커는 이러한 불안정성을 이용하여 무단 접근을 얻습니다.

해커는 Magical String이라는 간단한 문자열을 사용합니다. 예를 들면, 아래와 같습니다.

**사용자 이름: _admin_**

**비밀번호: _anything 'or'1'='1_**

로그인 버튼을 클릭하면, SQL 쿼리가 아래와 같이 작동합니다.

```sql
"SELECT Count(*) FROM Users WHERE Username=' admin ' AND Password=' anything 'or'1'='1 ' ";
```

위 쿼리의 비밀번호 섹션을 자세히 살펴보세요.

```plain
Password=' anything 'or'1'='1 '
```

비밀번호는 'anything'이 아니므로, password=anything의 결과도 거짓(FALSE)이지만, '1'='1'은 참(TRUE) 문이므로 TRUE 값을 반환합니다. 마지막으로, OR 연산자로 인해, 값(FALSE 또는 TRUE)이 TRUE이므로, 인증 우회에 성공합니다. 단순한 문자열(Magical String) 때문에 전체 데이터베이스가 손상되었습니다.

## 예방 방법

사용자 자격 증명에 대한 쿼리를 실행하기 전에, 아래와 같이 몇 가지 사항을 변경합니다.

```sql
$id = $_GET['id']

(1) $id = Stripslashes($id)

(2) $id = mysql_real_escape_String($id)
```

따라서 (1)로 인해 입력 문자열의 각 작은 따옴표(')가 큰따옴표(")로 바뀌고, (2)로 인해 모든 작은 따옴표(') 앞에 (/)가 추가됩니다. 수정된 Magical String은 인증을 우회하지 못하며, 데이터베이스는 안전하게 유지됩니다.

## 같이 보기

- 위키백과의 [SQL 인젝션](https://en.wikipedia.org/wiki/SQL_injection)
- OWASP (Open Web Application Security Project)의 [SQL 인젝션에 대한 설명](https://owasp.org/www-community/attacks/SQL_Injection)
