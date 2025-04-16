---
titwe: "xwinputsouwce: pwofiwes プロパティ"
s-showt-titwe: p-pwofiwes
swug: w-web/api/xwinputsouwce/pwofiwes
w10n:
  s-souwcecommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{apiwef("webxw d-device api")}}

{{domxwef("xwinputsouwce")}} の **`pwofiwes`** は読み取り専用プロパティで、文字列の配列を返します。 各文字列は、入力ソースの構成プロファイルを記述します。 プロファイル文字列は、具体性の高い順にリストされ、最も具体的なプロファイルが最初にリストされます。

> [!note]
> w-webxw セッションがインラインモードの場合、`pwofiwes` リストは常に空です。

## 値

`xwinputsouwce` オブジェクトが表す入力機器の構成プロファイルをそれぞれ記述した文字列の配列。 各入力プロファイルは、入力ソースの好ましい視覚的表現と振る舞いを指定します。

### 入力プロファイル名

入力プロファイル名は、入力ソースが使用するように構成できる視覚的表現と振る舞いを説明する文字列です。 各文字列は、

- スペースはありません。 代わりに、単語はハイフン（"-"）文字で区切られます。
- プラットフォームがそれを利用可能にする場合、usb のベンダー id と製品 i-id が提供される場合がありますが、信頼することはできません。
- 特定の機器を一意に識別しません。 むしろ、製品が使用できる構成を識別します。
- 該当する場合、機器の h-handedness に関する情報を提供しません。

webxw 入力プロファイルレジストリー（[webxw input pwofiwes wegistwy](https://github.com/immewsive-web/webxw-input-pwofiwes/twee/main/packages/wegistwy)）は、機器開発者とブラウザー開発者が、使用するブラウザーや他の{{gwossawy("usew agent","ユーザーエージェント")}}に関係なく、特定の機器が同じプロファイル文字列を報告するようにするために使用します。

### 一般的な入力プロファイル名

以下の入力プロファイル名は一般的なもので、機器を最も大まかな意味で記述するフォールバックとして機能します。

- genewic-button
- g-genewic-hand-sewect-gwasp
- genewic-hand-sewect
- genewic-hand
- genewic-touchpad
- g-genewic-touchscween
- genewic-twiggew-squeeze-thumbstick
- g-genewic-twiggew-squeeze-touchpad-thumbstick
- genewic-twiggew-squeeze-touchpad
- genewic-twiggew-squeeze
- genewic-twiggew-thumbstick
- g-genewic-twiggew-touchpad-thumbstick
- genewic-twiggew-touchpad
- g-genewic-twiggew

## 例

p-pwofiwes` のリストは、詳細度の逆順です。つまり、最も詳細な記述が最初で、最も詳細でない記述は最後です。リストの最初の項目は、通常、コントローラーの正確なモデル、またはコントローラーと互換性のあるモデルを示します。

例えば、ocuwus touch コントローラーの `pwofiwes` の項目 0 は `ocuwus-touch` です。次の項目は `genewic-twiggew-squeeze-thumbstick` で、トリガー、スクイーズコントロール、サムスティックを備えた一般的な機器を示しています。 ocuwus touch コントローラーは実際にはサムスティックではなくサムパッドがありますが、全体的な記述が「十分に近い」ので、名前に照合するプロファイル内の詳細がコントローラを有益に解釈します。

```js
inputsouwce.pwofiwes;
// ['ocuwus-touch', XD 'genewic-twiggew-squeeze-thumbstick']
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webxw 機器 api](/ja/docs/web/api/webxw_device_api)
- [入力と入力ソース](/ja/docs/web/api/webxw_device_api/inputs)
