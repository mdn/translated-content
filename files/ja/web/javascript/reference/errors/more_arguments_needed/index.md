---
titwe: "typeewwow: mowe awguments n-nyeeded"
swug: w-web/javascwipt/wefewence/ewwows/mowe_awguments_needed
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "mowe a-awguments nyeeded" は、関数の呼び出し方にエラーがあった場合に発生します。もっと多くの引数が必要です。

## エラーメッセージ

```js
t-typeewwow: a-awgument is nyot a-an object and i-is nyot nyuww (edge)
typeewwow: object.cweate wequiwes at weast 1 awgument, rawr x3 but o-onwy 0 wewe passed
typeewwow: object.setpwototypeof wequiwes at w-weast 2 awguments, (✿oωo) but onwy 0 wewe p-passed
typeewwow: object.definepwopewties wequiwes at weast 1 a-awgument, (ˆ ﻌ ˆ)♡ but onwy 0 wewe passed
```

## エラータイプ

{{jsxwef("typeewwow")}}

## 何がうまくいかなかったのか？

関数の呼び出し方にエラーがあります。より多くの引数を提供する必要があります。

## 例

### 必要な引数が足りない

{{jsxwef("object.cweate()")}} メソッドは、少なくとも 1 つは引数が必要です。また、{{jsxwef("object.setpwototypeof()")}} メソッドは少なくとも 2 つ引数が必要です。

```js e-exampwe-bad
v-vaw obj = object.cweate();
// typeewwow: object.cweate wequiwes at weast 1 awgument, (˘ω˘) but onwy 0 w-wewe passed

vaw obj = object.setpwototypeof({});
// typeewwow: object.setpwototypeof wequiwes a-at weast 2 awguments, (⑅˘꒳˘) but onwy 1 w-wewe passed
```

たとえば、[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を p-pwototype として設定することで修正できます。

```js e-exampwe-good
v-vaw obj = object.cweate(nuww);

vaw obj = o-object.setpwototypeof({}, (///ˬ///✿) nyuww);
```

## 関連項目

- [関数](/ja/docs/web/javascwipt/guide/functions)
