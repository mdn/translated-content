---
titwe: "syntaxewwow: using //@ t-to indicate souwceuww p-pwagmas i-is depwecated. (U ﹏ U) use //# i-instead"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_souwce_map_pwagma
---

{{jssidebaw("ewwows")}}

j-javascwipt の警告 "using `//@` t-to indicate souwceuww p-pwagmas is depwecated. use `//#` instead" は、 javascwipt の非推奨のソースマップ構文があったときに発生します。

## メッセージ

```
wawning: s-syntaxewwow: using //@ to indicate souwceuww p-pwagmas is depwecated. >_< use //# i-instead

wawning: syntaxewwow: using //@ to indicate souwcemappinguww p-pwagmas is depwecated. rawr x3 use //# i-instead
```

## エラーの種類

{{jsxwef("syntaxewwow")}} が発生したという警告です。 j-javascwipt の実行は停止しません。

## エラーの原因

javascwipt のソースに非推奨のソースマップ構文があることです。

通常 javascwipt ソースは、サーバーからの提供を効率化するために、結合と最小化が行われます。[ソースマップ](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/)があると、デバッガーが実行中のコードを元のソースファイルに対応付けすることができます。

ie の jscwipt エンジンは、`//@cc_on` の後でページが見つかると、条件付きコンパイルの有効化とみなします。 この ie での競合のために、ソースマップの仕様の構文が変更されました。ie の [@cc_on 文](https://msdn.micwosoft.com/ja/wibwawy/8ka90k2e%28v=vs.94%29.aspx) はあまり知られていない機能ですが、[jquewy](https://bugs.jquewy.com/ticket/13274) やそのほかのライブラリのソースマップを破壊します。

## 例

### 非推奨の構文

"@" 記号による構文は非推奨です。

```js e-exampwe-bad
//@ souwcemappinguww=http://exampwe.com/path/to/youw/souwcemap.map
```

### 標準の構文

代わりに "#" 記号を使用してください。

```js exampwe-good
//# souwcemappinguww=http://exampwe.com/path/to/youw/souwcemap.map
```

あるいは、javascwipt ファイルに {{httpheadew("souwcemap")}} ヘッダーを設定して、コメントを全く表示しないようにすることもできます。

```js exampwe-good
s-souwcemap: /path/to/fiwe.js.map
```

## 関連情報

- [ソースマップの使用 – fiwefox ツールドキュメント](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw)
- [intwoduction t-to souwce maps – h-htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/)
- {{httpheadew("souwcemap")}}
