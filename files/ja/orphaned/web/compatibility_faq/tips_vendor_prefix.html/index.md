---
title: mobile版Firefox向けベンダープレフィックス対処方法まとめ
slug: orphaned/Web/Compatibility_FAQ/Tips_Vendor_Prefix.html
---

## 概要

ベンダープレフィックス(接頭辞)付きのプロパティや値は、Firefox、Chrome 等のブラウザ毎に実装が異なり、また PC 版と mobile 版でも異なるため、細かな配慮が必要です。
　例えば、PC 版 Firefox では有効な接頭辞-moz-が mobile 版 Firefox ではサポートされていません。
　本稿では、mobile 版 Chrome と同 Firefox との実装方法の比較、Firefox にて適用されないベンダープレフィックス付きプロパティの一覧、その書き換えの方法等の情報をまとめます。

以下、PC 版 Firefox、mobile 版 Chrome 向けの記述と mobile 版 Firefox 向けの記述を比較した表です。

---

### Mozilla CSS 拡張仕様 (-moz-)

詳細は、[Mozilla 独自の CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_Extensions) をご覧ください。

＜表 1 : -moz-指定された値と mobile 版 Firefox 向け対処法＞

|                      |                              |                                                          |                                                        |
| -------------------- | ---------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| **プロパティ・値**   | **意味**                     | **PC 版 Firefox 向け記述例**                             | **mobile 版 Firefox 向け対処法**                       |
| -moz-box             | 要素をボックス配置する       | display: -moz-box;                                       | display: inline-block;                                 |
| -moz-border-radius   | 枠線の角丸を設定する         | -moz-border-radius: 10px;                                | border-radius: 10px;                                   |
| -moz-linear-gradient | グラデーション装飾を付与する | background: -moz-linear-gradient(top, #F0F0F0 0%, #ccc); | background: linear-gradient(to top, #F0F0F0 0%, #ccc); |

---

### Webkit CSS 拡張仕様 (-webkit-)

詳細は、[WebKit 独自の CSS 拡張](/ja/docs/Web/CSS/Reference/Webkit_Extensions) をご覧ください。

＜表 2 : -webkit-指定された値と mobile 版 Firefox 向け対処法＞

|                                    |                                                                      |                                                                                          |                                                                |
| ---------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **プロパティ・値**                 | **意味**                                                             | **mobile 版 Chrome 向け記述例**                                                          | **mobile 版 Firefox 向け対処法**                               |
| -webkit-appearance                 | ブラウザデフォルトの装飾設定を適用する                               | -webkit-appearance: none;                                                                | 代替指定が存在しないため、明示的にスタイル指定する             |
| -webkit-background-size            | 背景サイズを指定する                                                 | -webkit-background-size: 26px auto;                                                      | background-size: 26px auto;                                    |
| -webkit-border-radius              | 枠線の角丸を設定する                                                 | -webkit-border-radius: 5px;                                                              | border-radius: 5px;                                            |
| -webkit-box-shadow                 | 領域のシャドーを設定する                                             | -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);                                        | box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);                      |
| -webkit-box-sizing                 | 領域のサイズを設定する                                               | -webkit-box-sizing: border-box;                                                          | box-sizing: border-box;                                        |
| -webkit-gradient                   | グラデーション装飾を付与する                                         | background: -webkit-gradient(linear, left bottom, left top, from(#ffffff), to(#f6f6f6)); | background: linear-gradient(to bottom, #ffffff, #f6f6f6);      |
| -webkit-linear-gradient            | グラデーション装飾を付与する                                         | background: -webkit-linear-gradient(top, #00397b 0%, #01afeb 100%);                      | background: linear-gradient(to top, #00397b 0%, #01afeb 100%); |
| -webkit-transform                  | 要素を移動、回転、スケーリング、傾斜させる                           | -webkit-transform: rotate(-45deg);                                                       | transform: rotate(-45deg);                                     |
| -webkit-transition-duration        | トランジションによるアニメーションが完了するまでの所要時間を指定する | -webkit-transition-duration: 100ms;                                                      | JavaScript で実装する                                          |
| -webkit-transition-property        | トランジションさせるプロパティを指定する                             | -webkit-transition-property: opacity;                                                    | JavaScript で実装する                                          |
| -webkit-transition-timing-function | トランジション実行中の値の変更速度を操作する                         | -webkit-transition-timing-function: ease-in-out;                                         | JavaScript で実装する                                          |

---

## 考察

・ベンダープレフィックスの使用は互換性を損なうため、Web 標準である CSS3 での記述に統一すべきです。
　　そうすることで、一つのコンテンツ記述でマルチ・ブラウザ対応が可能となります。

・appearance プロパティ、transition プロパティ等(アニメーション系の CSS 指定)は代替要素がないため、JavaScript で実装し直す方が容易で確実と考えられます。

<p class="attention">注意：backgrouond: gradient; 系統のスタイル指定については、たびたび構文が変更されており、特に注意が必要です。<br>　　　以下のように、PC版ChromeとPC版Firefoxを比較してみても、目まぐるしく仕様変更されています。</p>

＜表 3 : ブラウザとバージョンごとに異なる gradient プロパティの構文＞

|                                  |                            |
| -------------------------------- | -------------------------- |
| **ブラウザ/バージョン**          | **構文**                   |
| Chrome/3-9                       | -webkit-gradient();        |
| Chrome/10-25                     | -webkit-linear-gradient(); |
| Chrome/26 以降                   | linear-gradient();         |
| Firefox/3.6-15                   | -moz-linear-gradient();    |
| Firefox/16(2012.10 リリース)以降 | linear-gradient();         |

mobile 版 Firefox は CSS3 準拠のため、[MDN](/ja/docs/Web/CSS/linear-gradient)等のリファレンスを参照し、適正な設定を行うことが必要です。

## 参考

・CSS グラデーションの利用 - Web developer guide | MDN
　　[https://developer.mozilla.org/ja/docs/Web/Guide/CSS/Using_CSS_gradients](/ja/docs/Web/Guide/CSS/Using_CSS_gradients)

[戻る](/ja/docs/Web/Compatibility_FAQ)
