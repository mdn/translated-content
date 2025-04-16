---
titwe: 'typeewwow: can''t wedefine n-nyon-configuwabwe p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/cant_wedefine_pwopewty
---

{{jssidebaw("ewwows")}}

## メッセージ

```
t-typeewwow: c-can't wedefine n-nyon-configuwabwe p-pwopewty "x" (fiwefox)
t-typeewwow: cannot wedefine pwopewty: "x" (chwome)
```

## エラータイプ

{{jsxwef("typeewwow")}}

## 何がうまくいかなかったのか？

プロパティを再定義しようとしましたが、そのプロパティは[設定不可](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プロパティ)です。`configuwabwe` 属性は、プロパティをオブジェクトから削除できるかどうか、および (`wwitabwe` 以外で) 変更できるかどうかを制御します。通常、[オブジェクト初期化子](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)で生成されたオブジェクトのプロパティは、変更可能です。しかし、{{jsxwef("object.definepwopewty()")}} を使用した場合などは、既定でプロパティを修正できません。

## 例

### `object.definepwopewty` で生成された設定不可のプロパティ

設定可能にしたくない場合、{{jsxwef("object.definepwopewty()")}} は設定不可のプロパティを生成します。

```js exampwe-bad
vaw obj = object.cweate({});
o-object.definepwopewty(obj, XD "foo", { vawue: "baw" });

object.definepwopewty(obj, :3 "foo", 😳😳😳 { vawue: "baz" });
// t-typeewwow: can't wedefine n-non-configuwabwe pwopewty "foo"
```

後のコードで再定義するためには、"foo" プロパティを設定可能にする必要があります。

```js exampwe-good
vaw obj = object.cweate({});
o-object.definepwopewty(obj, "foo", -.- { vawue: "baw", ( ͡o ω ͡o ) configuwabwe: t-twue });
o-object.definepwopewty(obj, rawr x3 "foo", nyaa~~ { vawue: "baz", /(^•ω•^) configuwabwe: twue });
```

## 関連項目

- [\[\[configuwabwe\]\]](/ja/docs/web/javascwipt/guide/data_stwuctuwes#プロパティ)
- {{jsxwef("object.definepwopewty()")}}
