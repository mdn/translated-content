---
title: URL Pattern API
slug: Web/API/URL_Pattern_API
tags:
  - API
  - Overview
  - URL
  - URLPattern
  - URL Pattern API
  - Web
browser-compat: api.URLPattern
---

{{DefaultAPISidebar("URL Pattern API")}}

URL 패턴 API는 URL 패턴 일치자를 생성하는 데 사용되는 구문을 정의한다. 이러한 패턴들은 URL들 또는 각각의 URL 구성요소들과 일치한다. 이 URL 패턴 API는 {{domxref("URLPattern")}} 인터페이스에서 사용된다.

## 개념과 사용

패턴 구문은 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 라이브러리 구문에 기초한다. 아래 경우들이 패턴에 속한다.

- 정확히 일치하는 리터럴 문자열
- 모든 문자와 일치하는 와일드카드 (`/posts/*`)
- 일치하는 URL의 일부분으로 추출될 수 있는, 이름 있는 그룹 (`/books/:id`)
- 패턴 중 일부가 선택사항이거나 패턴과 여러번 일치하는, 캡쳐되지 않는 그룹 (`/books{/old}?`) 
- 임의로 복잡한 정규표현식과 일치하는 {{jsxref("RegExp")}} 그룹 (`/books/(^\d)`)

아래 [패턴 구문](#pattern_syntax) 섹션에서 이러한 구문에 대한 좀더 자세한 내용을 알아볼 수 있다.

## URL 패턴 API 인터페이스

URL 패턴 API는 단 하나의 인터페이스를 갖고 있다.

- {{domxref("URLPattern")}}

## 패턴 구문

패턴 구문은 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 라이브러리 구문에 기초한다. 

이 구문은 [Ruby on Rails](https://rubyonrails.org)나, [Express](https://expressjs.com/), [Next.js](https://next.js)와 같은 JavaScript 프레임워크에서 사용되던 것들과 유사하다.

### 고정 텍스트와 캡쳐 그룹

각 패턴은 고정 텍스트와 그룹들로 결합된다. 고정 텍스트는 정확히 일치하는 문자열이다. 그룹은 일치 규칙을 따르는 임의의 문자열과 일치한다. URL 각각의 부분들은 아래 설명처럼, 각자의 기본적인 규칙을 갖고 있지만, 덮어쓰기될 수 있다.

```js
// 어떤 고정 텍스트('/books')에 일치하는 패턴
const pattern = new URLPattern({ pathname: '/books' });
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.exec('https://example.com/books').pathname.groups); // {}

// 이름 있는 그룹('id')에 일치하는 패턴
const pattern = new URLPattern({ pathname: '/books/:id' });
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { id: '123' }
```

### 부분 와일드카드

기본적으로, URL에서 경로 이름(`pathname`) 부분 그룹은 모든 문자에 일치하며, 앞에 슬래시(`/`) 문자를 포함한다. 호스트 이름(`hostname`) 부분 그룹은 점(`/`)을 제외한 모든 문자와 일치한다. 다른 모든 부분 그룹들은 모든 문자와 일치한다. 부분 와일드카드는 탐욕적이지 않으며, 이는 가능한 가장 짧은 문자열 하나에 일치함을 의미한다.

### 정규표현식 일치자

Instead of using the default match rules for a group, you can use a regex for
each group. This regex defines the matching rules for the group. Below is an
example of a regex matcher on a named group that constrains the group to only
match if it contains one or more digits:

```js
const pattern = new URLPattern('/books/:id(\\d+)', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books/abc')); // false
console.log(pattern.test('https://example.com/books/')); // false
```

### 이름 없는 그룹과 이름 있는 그룹

Groups can either be named or unnamed. Named groups are specified by prefixing
the group name with a colon (`:`). Regexp groups that are not prefixed by a
colon and a name are unnamed. Unamed groups are numerically indexed in the match
result based on their order in the pattern.

```js
// A named group
const pattern = new URLPattern('/books/:id(\\d+)', 'https://example.com');
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { id: '123' }

// An unnamed group
const pattern = new URLPattern('/books/(\\d+)', 'https://example.com');
console.log(pattern.exec('https://example.com/books/123').pathname.groups); // { '0': '123' }
```

### 그룹 수정자

Groups can also have modifiers. These are specified after the group name (or
after the regexp if there is one). There are three modifiers: `?` to make the
group optional, `+` to make the group repeat one or more times, and `*` to make
the group repeat zero or more times.

```js
// An optional group
const pattern = new URLPattern('/books/:id?', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // false
console.log(pattern.test('https://example.com/books/123/456/789')); // false

// A repeating group with a minimum of one
const pattern = new URLPattern('/books/:id+', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/456/789')); // true

// A repeating group with a minimum of zero
const pattern = new URLPattern('/books/:id*', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/456/789')); // true
```

### 그룹 구분자

Patterns can also contain group delimiters. These are pieces of a pattern that
are surrounded by curly braces (`{}`). These group delimiters are not captured
in the match result like capturing groups, but can still have modifiers applied
to them, just like groups. If group delimiters are not modified by a modifier,
they are treated as if the items in them were just part of the parent pattern.
Group delimiters may not contain other group delimiters, but may contain any
other pattern items (capturing groups, regex, wildcard, or fixed text).

```js
// A group delimiter with a ? (optional) modifier
const pattern = new URLPattern('/book{s}?', 'https://example.com');
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/book')); // true
console.log(pattern.exec('https://example.com/books').pathname.groups); // {}

// A group delimiter without a modifier
const pattern = new URLPattern('/book{s}', 'https://example.com');
console.log(pattern.pathname); // /books
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/book')); // false

// A group delimiter containing a capturing group
const pattern = new URLPattern({ pathname: '/blog/:id(\\d+){-:title}?' });
console.log(pattern.test('https://example.com/blog/123-my-blog')); // true
console.log(pattern.test('https://example.com/blog/123')); // true
console.log(pattern.test('https://example.com/blog/my-blog')); // false
```

### 경로 이름들에 자동으로 그룹 접두사 붙이기

In patterns that match against the `pathname` part of a URL, groups get an
automatic slash (`/`) prefix added if the group definition is preceded by a
slash (`/`). This is useful for groups with modifiers, as it allows for
repeating groups to work as expected.

If you do not want automatic prefixing, you can disable it by surrounding the
group with group delimiters (`{}`). Group delimiters do not have automatic
prefixing behavior.

```js
// A pattern with an optional group, preceded by a slash
const pattern = new URLPattern('/books/:id?', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // true
console.log(pattern.test('https://example.com/books/')); // false

// A pattern with a repeating group, preceded by a slash
const pattern = new URLPattern('/books/:id+', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books/123/456')); // true
console.log(pattern.test('https://example.com/books/123/')); // false
console.log(pattern.test('https://example.com/books/123/456/')); // false

// Segment prefixing does not occur outside of pathname patterns
const pattern = new URLPattern({ hash: '/books/:id?' });
console.log(pattern.test('https://example.com#/books/123')); // true
console.log(pattern.test('https://example.com#/books')); // false
console.log(pattern.test('https://example.com#/books/')); // true

// Disabling segment prefixing for a group using a group delimiter
const pattern = new URLPattern({ pathname: '/books/{:id}?' });
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // true
```

### 와일드카드 토큰

The wildcard token (`*`) is a shorthand for an unnamed capturing group that
matches all characters zero or more times. You can place this anywhere in the
pattern. The wilcard is greedy, meaning that it will match the longest possible
string.

```js
// A wildcard at the end of a pattern
const pattern = new URLPattern('/books/', 'https://example.com');
console.log(pattern.test('https://example.com/books/123')); // true
console.log(pattern.test('https://example.com/books')); // false
console.log(pattern.test('https://example.com/books/')); // true
console.log(pattern.test('https://example.com/books/123/456')); // true

// A wildcard in the middle of a pattern
const pattern = new URLPattern('/*.png', 'https://example.com');
console.log(pattern.test('https://example.com/image.png')); // true
console.log(pattern.test('https://example.com/image.png/123')); // false
console.log(pattern.test('https://example.com/folder/image.png')); // true
console.log(pattern.test('https://example.com/.png')); // true
```

### 패턴 일반화

When a pattern is parsed it is automatically normalized to a canonical form. For
example, unicode characters are percent encoded in the pathname property,
punycode encoding is used in the hostname, default port numbers are elided,
paths like `/foo/./bar/` are collapsed to just `/foo/bar`, etc. In addition,
there are some pattern representations that parse to the same underlying
meaning, like `foo` and `{foo}`. Such cases are normalized to the simplest form.
In this case `{foo}` gets changed to `foo`.

## 예제들

### 특정 URL 컴포넌트 필터링하기

The following example shows how a `URLPattern` filters a specific URL component.
When the `URLPattern()` constructor is called with a structured object of
component patterns any missing components default to the `*` wildcard value.

```js
// Construct a URLPattern that matches a specific domain and its subdomains.
// All other URL components default to the wildcard `*` pattern.
const pattern = new URLPattern({
  hostname: '{*.}?example.com',
});

console.log(pattern.hostname); // '{*.}?example.com'

console.log(pattern.protocol); // '*'
console.log(pattern.username); // '*'
console.log(pattern.password); // '*'
console.log(pattern.pathname); // '*'
console.log(pattern.search); // '*'
console.log(pattern.hash); // '*'

console.log(pattern.test('https://example.com/foo/bar')); // true

console.log(pattern.test({ hostname: 'cdn.example.com' })); // true

console.log(pattern.test('custom-protocol://example.com/other/path?q=1')); // true

// Prints `false` because the hostname component does not match
console.log(pattern.test('https://cdn-example.com/foo/bar'));
```

### 전체 URL 문자열에서 URL 패턴 생성하기

The following example shows how to construct a `URLPattern` from a full URL
string with embedded patterns. For example, a `:` can be both the URL protocol
suffix, like `https:`, and the beginning of a named pattern group, like `:foo`.
It "just works" if there is no ambiguity between whether a character is part of
the URL syntax or part of the pattern syntax.

```js
// Construct a URLPattern that matches URLs to CDN servers loading jpg images.
// URL components not explicitly specified, like search and hash here, result
// in the empty string similar to the URL() constructor.
const pattern = new URLPattern('https://cdn-*.example.com/*.jpg');

console.log(pattern.protocol); // 'https'

console.log(pattern.hostname); // 'cdn-*.example.com'

console.log(pattern.pathname); // '/*.jpg'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

// Prints `true`
console.log(
    pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg");

// Prints `false` because the search component does not match
console.log(
    pattern.test("https://cdn-1234.example.com/product/assets/hero.jpg?q=1");
```

### 애매한 URL 문자열로 URL 패턴 생성하기

The following example shows how a `URLPattern` constructed from an ambiguous
string will favor treating characters as part of the pattern syntax. In this
case the `:` character could be the protocol component suffix or it could be the
prefix for a named group in the pattern. The constructor chooses to treat this
as part of the pattern and therefore determines this is a relative pathname
pattern. Since there is no base URL the relative pathname cannot be resolved and
it throws an error.

```js
// Throws because this is interpreted as a single relative pathname pattern
// with a ":foo" named group and there is no base URL.
const pattern = new URLPattern('data:foo*');
```

### 명확한 URL 패턴 생성 문자열을 위해 이스케이프 문자열 사용하기

The following example shows how an ambiguous constructor string character can be
escaped to be treated as a URL separator instead of a pattern character. Here
`:` is escaped as `\\:`.

```js
// Constructs a URLPattern treating the `:` as the protocol suffix.
const pattern = new URLPattern('data\\:foo*');

console.log(pattern.protocol); // 'data'

console.log(pattern.pathname); // 'foo*'

console.log(pattern.username); // ''
console.log(pattern.password); // ''
console.log(pattern.hostname); // ''
console.log(pattern.port); // ''
console.log(pattern.search); // ''
console.log(pattern.hash); // ''

console.log(pattern.test('data:foobar')); // true
```

### 기본 URL에 `test()`, `exec()` 사용하기

The following example shows how `test()` and `exec()` can use base URLs.

```js
const pattern = new URLPattern({ hostname: 'example.com', pathname: '/foo/*' });

// Prints `true` as the hostname based in the dictionary `baseURL` property
// matches.
console.log(pattern.test({
  pathname: '/foo/bar',
  baseURL: 'https://example.com/baz',
}));

// Prints `true` as the hostname in the second argument base URL matches.
console.log(pattern.test('/foo/bar', 'https://example.com/baz'));

// Throws because the second argument cannot be passed with a dictionary input.
try {
  pattern.test({ pathname: '/foo/bar' }, 'https://example.com/baz');
} catch (e) {}

// The `exec()` method takes the same arguments as `test()`.
const result = pattern.exec('/foo/bar', 'https://example.com/baz');

console.log(result.pathname.input); // '/foo/bar'

console.log(result.pathname.groups[0]); // 'bar'

console.log(result.hostname.input); // 'example.com'
```

### 기본 URL을 URL 패턴 생성자에서 사용하기

The follow example shows how base URLs can also be used to construct the
`URLPattern`. Note that the base URL in these cases is treated strictly as a URL
and cannot contain any pattern syntax itself.

Also, since the base URL provides a value for every component the resulting
`URLPattern` will also have a value for every component, even if it's the empty
string. This means you do not get the "default to wildcard" behavior.

```js
const pattern1 = new URLPattern({ pathname: '/foo/*',
                                  baseURL: 'https://example.com' });

console.log(pattern1.protocol); // 'https'
console.log(pattern1.hostname); // 'example.com'
console.log(pattern1.pathname); // '/foo/*'

console.log(pattern1.username); // ''
console.log(pattern1.password); // ''
console.log(pattern1.port); // ''
console.log(pattern1.search); // ''
console.log(pattern1.hash); // ''

// Equivalent to pattern1
const pattern2 = new URLPattern('/foo/*', 'https://example.com' });

// Throws because a relative constructor string must have a base URL to resolve
// against.
try {
  const pattern3 = new URLPattern('/foo/*');
} catch (e) {}
```

### 일치하는 그룹 결과값에 접근하기

The following example shows how input values that match pattern groups can later
be accessed from the `exec()` result object. Unnamed groups are assigned index
numbers sequentially.

```js
const pattern = new URLPattern({ hostname: '*.example.com' });
const result = pattern.exec({ hostname: 'cdn.example.com' });

console.log(result.hostname.groups[0]); // 'cdn'

console.log(result.hostname.input); // 'cdn.example.com'

console.log(result.inputs); // [{ hostname: 'cdn.example.com' }]
```

### 커스텀 이름을 사용해 일치하는 그룹 결과값에 접근하기

The following example shows how groups can be given custom names which can be
used to accessed the matched value in the result object.

```js
// Construct a URLPattern using matching groups with custom names.  These
// names can then be later used to access the matched values in the result
// object.
const pattern = new URLPattern({ pathname: '/:product/:user/:action' });
const result = pattern.exec({ pathname: '/store/wanderview/view' });

console.log(result.pathname.groups.product); // 'store'
console.log(result.pathname.groups.user); // 'wanderview'
console.log(result.pathname.groups.action); // 'view'

console.log(result.pathname.input); // '/store/wanderview/view'

console.log(result.inputs); // [{ pathname: '/store/wanderview/view' }]
```

### 정규표현식 그룹 커스텀하기

The following example shows how a matching group can use a custom regular
expression.

```js
const pattern = new URLPattern({ pathname: '/(foo|bar)' });

console.log(pattern.test({ pathname: '/foo' })); // true
console.log(pattern.test({ pathname: '/bar' })); // true
console.log(pattern.test({ pathname: '/baz' })); // false

const result = pattern.exec({ pathname: '/foo' });

console.log(result.pathname.groups[0]); // 'foo'
```

### 커스텀 정규표현식으로 이름있는 그룹 만들기

The following example shows how to use a custom regular expression with a named
group.

```js
const pattern = new URLPattern({ pathname: '/:type(foo|bar)' });
const result = pattern.exec({ pathname: '/foo' });

console.log(result.pathname.groups.type); // 'foo'
```

### 선택적 일치 그룹 만들기

The following example shows how to make a matching group optional by placing a
`?` modifier after it. For the pathname component this also causes any preceding
`/` character to be treated as an optional prefix to the group.

```js
const pattern = new URLPattern({ pathname: '/product/(index.html)?' });

console.log(pattern.test({ pathname: '/product/index.html' })); // true
console.log(pattern.test({ pathname: '/product' })); // true

const pattern2 = new URLPattern({ pathname: '/product/:action?' });

console.log(pattern2.test({ pathname: '/product/view' })); // true
console.log(pattern2.test({ pathname: '/product' })); // true

// Wildcards can be made optional as well.  This may not seem to make sense
// since they already match the empty string, but it also makes the prefix
// `/` optional in a pathname pattern.
const pattern3 = new URLPattern({ pathname: '/product/*?' });

console.log(pattern3.test({ pathname: '/product/wanderview/view' })); // true
console.log(pattern3.test({ pathname: '/product' })); // true
console.log(pattern3.test({ pathname: '/product/' })); // true
```

### 다수의 일치 그룹 만들기

The following example shows how a matching group can be made repeated by placing
`+` modifier after it. In the `pathname` component this also treats the `/`
prefix as special. It is repeated with the group.

```js
const pattern = new URLPattern({ pathname: '/product/:action+' });
const result = pattern.exec({ pathname: '/product/do/some/thing/cool' });

result.pathname.groups.action; // 'do/some/thing/cool'

console.log(pattern.test({ pathname: '/product' })); // false
```

### 선택적 또는 반복 일치 그룹 만들기

The following example shows how to make a matching group that is both optional
and repeated. Do this by placing a `*` modifier after the group. Again, the
pathname component treats the `/` prefix as special. It both becomes optional
and is also repeated with the group.

```js
const pattern = new URLPattern({ pathname: '/product/:action*' });
const result = pattern.exec({ pathname: '/product/do/some/thing/cool' });

console.log(result.pathname.groups.action); // 'do/some/thing/cool'

console.log(pattern.test({ pathname: '/product' })); // true
```

### 커스텀 접두사 또는 접미사로 선택적 또는 반복 수정자 사용하기

The following example shows how curly braces can be used to denote a custom
prefix and/or suffix to be operated on by a subsequent `?`, `*`, or `+`
modifier.

```js
const pattern = new URLPattern({ hostname: '{:subdomain.}*example.com' });

console.log(pattern.test({ hostname: 'example.com' })); // true
console.log(pattern.test({ hostname: 'foo.bar.example.com' })); // true
console.log(pattern.test({ hostname: '.example.com' })); // false

const result = pattern.exec({ hostname: 'foo.bar.example.com' });

console.log(result.hostname.groups.subdomain); // 'foo.bar'
```

### 일치 그룹 없이, 선택적 또는 반복 고정 텍스트 선택자 만들기

The following example shows how curly braces can be used to denote fixed text
values as optional or repeated without using a matching group.

```js
const pattern = new URLPattern({ pathname: '/product{/}?' });

console.log(pattern.test({ pathname: '/product' })); // true
console.log(pattern.test({ pathname: '/product/' })); // true

const result = pattern.exec({ pathname: '/product/' });

console.log(result.pathname.groups); // {}
```

### 한번에 다수의 컴포넌트 및 특징 선택자 사용하기

The following example shows how many features can be combined across multiple
URL components.

```js
const pattern = new URLPattern({
  protocol: 'http{s}?',
  username: ':user?',
  password: ':pass?',
  hostname: '{:subdomain.}*example.com',
  pathname: '/product/:action*',
});

const result = pattern.exec(
  'http://foo:bar@sub.example.com/product/view?q=12345',
);

console.log(result.username.groups.user); // 'foo'
console.log(result.password.groups.pass); // 'bar'
console.log(result.hostname.groups.subdomain); // 'sub'
console.log(result.pathname.groups.action); // 'view'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `URLPattern` is available
  [on GitHub](https://github.com/kenchris/urlpattern-polyfill)
- The pattern syntax used by URLPattern is similar to the syntax used by
  [path-to-regexp](https://github.com/pillarjs/path-to-regexp)
