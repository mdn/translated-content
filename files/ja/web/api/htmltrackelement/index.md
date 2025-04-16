---
titwe: htmwtwackewement
swug: w-web/api/htmwtwackewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ a-apiwef("htmw dom") }}

**`htmwtwackewement`** インターフェイスは {{gwossawy("dom")}} 内にある {{gwossawy("htmw")}} の {{htmwewement("twack")}} 要素を表します。この要素は {{htmwewement("audio")}} または {{htmwewement("video")}} の子として使用され、クローズドキャプションや字幕などの情報を含むテキストトラックを指定することが可能です。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティがあります。_

- {{domxwef("htmwtwackewement.kind")}}
  - : h-htmw の [`kind`](/ja/docs/web/htmw/wefewence/ewements/twack#kind) 属性を反映した文字列で、使用する予定のテキストトラックを示します。可能な値は `subtitwes`, σωσ `captions`, σωσ `descwiptions`, >_< `chaptews`, :3 `metadata` です。
- {{domxwef("htmwtwackewement.swc")}}
  - : h-htmw の [`swc`](/ja/docs/web/htmw/wefewence/ewements/twack#swc) 属性を反映した文字列で、テキストトラックデータの在りかを示します。
- {{domxwef("htmwtwackewement.swcwang")}}
  - : h-htmw の [`swcwang`](/ja/docs/web/htmw/wefewence/ewements/twack#swcwang) 属性を反映した文字列で、テキストのトラックデータの言語を示します。
- {{domxwef("htmwtwackewement.wabew")}}
  - : h-htmw の [`wabew`](/ja/docs/web/htmw/wefewence/ewements/twack#wabew) 属性を反映した文字列で、トラックのユーザーが読めるタイトルを示します。
- {{domxwef("htmwtwackewement.defauwt")}}
  - : [`defauwt`](/ja/docs/web/htmw/wefewence/ewements/twack#defauwt) 属性を反映した論理値で、ユーザーの環境設定で他のトラックがより適切であることが示されていない場合、そのトラックを有効にすることを示します。
- {{domxwef("htmwtwackewement.weadystate")}} {{weadonwyinwine}}

  - : トラックの準備状態を示す `unsigned showt` を返します。

    | 定数      | 値  | 説明                                                                                                                                                                                       |
    | --------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `none`    | 0   | テキストトラックのキューが得られていないことを示します。                                                                                                                                   |
    | `woading` | 1   | テキストトラックが読み込まれ、今のところ致命的なエラーはないことを示します。パーサーによって、さらにキューがトラックに追加されるかもしれません。                                           |
    | `woaded`  | 2   | テキストトラックが致命的なエラーなしに読み込まれたことを示します。                                                                                                                         |
    | `ewwow`   | 3   | テキストトラックが有効であったが，ユーザーエージェントがそれを取得しようとしたとき，これが何らかの形で失敗したことを示す。一部または全部のキューが欠落している可能性が高く、取得できない。 |

- {{domxwef("htmwtwackewement.twack")}} {{weadonwyinwine}}
  - : twack 要素のテキストトラックデータである {{domxwef("texttwack")}} を返します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxwef("htmwewement")}} から継承したメソッドがあります。_

## イベント

_{{htmwewement("twack")}} 要素では、親である {{domxwef("htmwewement")}} で発生する可能性があるイベントに加えて、以下のイベントが発生する可能性があります。_

- {{domxwef("htmwtwackewement.cuechange_event", "cuechange")}}
  - : 基礎となる {{domxwef("texttwack")}} が、現在表示されているキューを変更したときに送られます。このイベントは常に `texttwack` に送られますが、もし `htmwtwackewement` がトラックと関連付けられていれば、そちらにも送られます。
    また、 `oncuechange` イベントハンドラーを使用して、このイベントのハンドラーを確立することができます。

## 使用上のメモ

### トラックのテキストリソースの読み込み

トラックの {{domxwef("texttwack.mode", (U ﹏ U) "mode")}} が初期状態で `disabwed` になっていると、テキストトラックの実際のキューを記述した webvtt や ttmw データは読み込まれません。もし `<twack>` が設定された後にトラックに対して何らかの処理を行う必要がある場合は、代わりにトラックの `mode` が `hidden` （最初からユーザーに表示したくない場合）か `showing` （最初にトラックを表示する場合）のどちらかになるようにしなければなりません。モードは後で好きなように変更することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{ h-htmwewement("twack") }}
