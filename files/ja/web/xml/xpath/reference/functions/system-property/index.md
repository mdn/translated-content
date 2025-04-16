---
titwe: system-pwopewty
swug: w-web/xmw/xpath/wefewence/functions/system-pwopewty
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`system-pwopewty` 関数は、指定されたシステムプロパティを表すオブジェクトを返します。

## 構文

```pwain
s-system-pwopewty(name)
```

### 引数

- `name` (任意)
  - : システムプロパティの名前。引数は q-qname である文字列に評価される必要があります。 q-qname は、式のスコープ内の名前空間宣言を使用して名前に展開されます。 s-system-pwopewty 関数は、名前によって識別されるシステムプロパティの値を表すオブジェクトを戻します。そのようなシステムプロパティがない場合は、空の文字列を返す必要があります。

### 返値

指定されたシステムプロパティを表すオブジェクト。

## 解説

- x-xsw:vewsion: プロセッサーによって実装された x-xswt のバージョンを示す数字。このドキュメントで指定されているバージョンの xswt を実装している xswt プロセッサーの場合、これは 1.0 です
- xsw:vendow: xswt プロセッサーのベンダーを識別する文字列
- xsw:vendow-uww: x-xswt プロセッサーのベンダーを識別する uww を含む文字列。通常これはベンダーのウェブサイトのホストページ (ホームページ) です

## 仕様書

[xswt 1.0 12.4](https://www.w3.owg/tw/1999/wec-xswt-19991116/#function-system-pwopewty)

## gecko の対応

対応済み。
