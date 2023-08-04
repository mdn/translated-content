---
title: HTMLTrackElement
slug: Web/API/HTMLTrackElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLTrackElement`** インターフェイスは {{Glossary("DOM")}} 内にある {{Glossary("HTML")}} の {{HTMLElement("track")}} 要素を表します。この要素は {{HTMLElement("audio")}} または {{HTMLElement("video")}} の子として使用され、クローズドキャプションや字幕などの情報を含むテキストトラックを指定することが可能です。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTrackElement.kind")}}
  - : HTML の [`kind`](/ja/docs/Web/HTML/Element/track#kind) 属性を反映した文字列で、使用する予定のテキストトラックを示します。可能な値は `subtitles`, `captions`, `descriptions`, `chapters`, `metadata` です。
- {{domxref("HTMLTrackElement.src")}}
  - : HTML の [`src`](/ja/docs/Web/HTML/Element/track#src) 属性を反映した文字列で、テキストトラックデータの在りかを示します。
- {{domxref("HTMLTrackElement.srclang")}}
  - : HTML の [`srclang`](/ja/docs/Web/HTML/Element/track#srclang) 属性を反映した文字列で、テキストのトラックデータの言語を示します。
- {{domxref("HTMLTrackElement.label")}}
  - : HTML の [`label`](/ja/docs/Web/HTML/Element/track#label) 属性を反映した文字列で、トラックのユーザーが読めるタイトルを示します。
- {{domxref("HTMLTrackElement.default")}}
  - : [`default`](/ja/docs/Web/HTML/Element/track#default) 属性を反映した論理値で、ユーザーの環境設定で他のトラックがより適切であることが示されていない場合、そのトラックを有効にすることを示します。
- {{domxref("HTMLTrackElement.readyState")}} {{ReadOnlyInline}}

  - : トラックの準備状態を示す `unsigned short` を返します。

    | 定数  | 値 | 説明                                                                                                                                                                              |
    | --------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `NONE`    | 0     | テキストトラックのキューが得られていないことを示します。                                                                                                                             |
    | `LOADING` | 1     | テキストトラックが読み込まれ、今のところ致命的なエラーはないことを示します。パーサーによって、さらにキューがトラックに追加されるかもしれません。                           |
    | `LOADED`  | 2     | テキストトラックが致命的なエラーなしに読み込まれたことを示します。                                                                                                                      |
    | `ERROR`   | 3     | テキストトラックが有効であったが，ユーザーエージェントがそれを取得しようとしたとき，これが何らかの形で失敗したことを示す。一部または全部のキューが欠落している可能性が高く、取得できない。 |

- {{domxref("HTMLTrackElement.track")}} {{ReadOnlyInline}}
  - : track 要素のテキストトラックデータである {{Domxref("TextTrack")}} を返します。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## イベント

_{{HTMLElement("track")}} 要素では、親である {{domxref("HTMLElement")}} で発生する可能性があるイベントに加えて、以下のイベントが発生する可能性があります。_

- {{domxref("HTMLTrackElement.cuechange_event", "cuechange")}}
  - : 基礎となる {{domxref("TextTrack")}} が、現在表示されているキューを変更したときに送られます。このイベントは常に `TextTrack` に送られますが、もし `HTMLTrackElement` がトラックと関連付けられていれば、そちらにも送られます。
    また、 `oncuechange` イベントハンドラーを使用して、このイベントのハンドラーを確立することができます。

## 使用上のメモ

### トラックのテキストリソースの読み込み

トラックの {{domxref("TextTrack.mode", "mode")}} が初期状態で `disabled` になっていると、テキストトラックの実際のキューを記述した WebVTT や TTML データは読み込まれません。もし `<track>` が設定された後にトラックに対して何らかの処理を行う必要がある場合は、代わりにトラックの `mode` が `hidden` （最初からユーザーに表示したくない場合）か `showing` （最初にトラックを表示する場合）のどちらかになるようにしなければなりません。モードは後で好きなように変更することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{ HTMLElement("track") }}
