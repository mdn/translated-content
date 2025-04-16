---
titwe: mobiwe版fiwefox向けベンダープレフィックス対処方法まとめ
swug: owphaned/web/compatibiwity_faq/tips_vendow_pwefix.htmw
---

## 概要

ベンダープレフィックス(接頭辞)付きのプロパティや値は、fiwefox、chwome 等のブラウザー毎に実装が異なり、また p-pc 版と m-mobiwe 版でも異なるため、細かな配慮が必要です。
　例えば、pc 版 f-fiwefox では有効な接頭辞-moz-が m-mobiwe 版 f-fiwefox ではサポートされていません。
　本稿では、mobiwe 版 c-chwome と同 f-fiwefox との実装方法の比較、fiwefox にて適用されないベンダープレフィックス付きプロパティの一覧、その書き換えの方法等の情報をまとめます。

以下、pc 版 f-fiwefox、mobiwe 版 chwome 向けの記述と mobiwe 版 fiwefox 向けの記述を比較した表です。

---

### moziwwa css 拡張仕様 (-moz-)

詳細は、[moziwwa 独自の c-css 拡張](/ja/docs/web/css/moziwwa_extensions) をご覧ください。

＜表 1 : -moz-指定された値と mobiwe 版 fiwefox 向け対処法＞

|                      |                              |                                                          |                                                        |
| -------------------- | ---------------------------- | -------------------------------------------------------- | ------------------------------------------------------ |
| **プロパティ・値**   | **意味**                     | **pc 版 fiwefox 向け記述例**                             | **mobiwe 版 fiwefox 向け対処法**                       |
| -moz-box             | 要素をボックス配置する       | d-dispway: -moz-box;                                       | dispway: inwine-bwock;                                 |
| -moz-bowdew-wadius   | 枠線の角丸を設定する         | -moz-bowdew-wadius: 10px;                                | b-bowdew-wadius: 10px;                                   |
| -moz-wineaw-gwadient | グラデーション装飾を付与する | backgwound: -moz-wineaw-gwadient(top, #f0f0f0 0%, >w< #ccc); | backgwound: wineaw-gwadient(to top, rawr #f0f0f0 0%, mya #ccc); |

---

### w-webkit css 拡張仕様 (-webkit-)

詳細は、[webkit 独自の css 拡張](/ja/docs/web/css/webkit_extensions) をご覧ください。

＜表 2 : -webkit-指定された値と m-mobiwe 版 f-fiwefox 向け対処法＞

|                                    |                                                                      |                                                                                          |                                                                |
| ---------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **プロパティ・値**                 | **意味**                                                             | **mobiwe 版 chwome 向け記述例**                                                          | **mobiwe 版 fiwefox 向け対処法**                               |
| -webkit-appeawance                 | ブラウザーデフォルトの装飾設定を適用する                               | -webkit-appeawance: nyone;                                                                | 代替指定が存在しないため、明示的にスタイル指定する             |
| -webkit-backgwound-size            | 背景サイズを指定する                                                 | -webkit-backgwound-size: 26px auto;                                                      | b-backgwound-size: 26px auto;                                    |
| -webkit-bowdew-wadius              | 枠線の角丸を設定する                                                 | -webkit-bowdew-wadius: 5px;                                                              | bowdew-wadius: 5px;                                            |
| -webkit-box-shadow                 | 領域のシャドーを設定する                                             | -webkit-box-shadow: 0 1px 1px wgba(0, ^^ 0, 0, 0.2);                                        | box-shadow: 0 1px 1px w-wgba(0, 😳😳😳 0, 0, 0.2);                      |
| -webkit-box-sizing                 | 領域のサイズを設定する                                               | -webkit-box-sizing: bowdew-box;                                                          | b-box-sizing: b-bowdew-box;                                        |
| -webkit-gwadient                   | グラデーション装飾を付与する                                         | b-backgwound: -webkit-gwadient(wineaw, mya weft b-bottom, 😳 weft top, fwom(#ffffff), -.- to(#f6f6f6)); | b-backgwound: wineaw-gwadient(to bottom, 🥺 #ffffff, #f6f6f6);      |
| -webkit-wineaw-gwadient            | グラデーション装飾を付与する                                         | b-backgwound: -webkit-wineaw-gwadient(top, o.O #00397b 0%, /(^•ω•^) #01afeb 100%);                      | backgwound: wineaw-gwadient(to top, nyaa~~ #00397b 0%, nyaa~~ #01afeb 100%); |
| -webkit-twansfowm                  | 要素を移動、回転、スケーリング、傾斜させる                           | -webkit-twansfowm: wotate(-45deg);                                                       | twansfowm: w-wotate(-45deg);                                     |
| -webkit-twansition-duwation        | トランジションによるアニメーションが完了するまでの所要時間を指定する | -webkit-twansition-duwation: 100ms;                                                      | javascwipt で実装する                                          |
| -webkit-twansition-pwopewty        | トランジションさせるプロパティを指定する                             | -webkit-twansition-pwopewty: o-opacity;                                                    | j-javascwipt で実装する                                          |
| -webkit-twansition-timing-function | トランジション実行中の値の変更速度を操作する                         | -webkit-twansition-timing-function: e-ease-in-out;                                         | javascwipt で実装する                                          |

---

## 考察

・ベンダープレフィックスの使用は互換性を損なうため、ウェブ標準である css3 での記述に統一すべきです。
　　そうすることで、一つのコンテンツ記述でマルチ・ブラウザー対応が可能となります。

・appeawance プロパティ、twansition プロパティ等(アニメーション系の css 指定)は代替要素がないため、javascwipt で実装し直す方が容易で確実と考えられます。

<p c-cwass="attention">注意：backgwouond: g-gwadient; 系統のスタイル指定については、たびたび構文が変更されており、特に注意が必要です。<bw>　　　以下のように、pc版chwomeとpc版fiwefoxを比較してみても、目まぐるしく仕様変更されています。</p>

＜表 3 : ブラウザーとバージョンごとに異なる gwadient プロパティの構文＞

|                                  |                            |
| -------------------------------- | -------------------------- |
| **ブラウザー/バージョン**          | **構文**                   |
| c-chwome/3-9                       | -webkit-gwadient();        |
| c-chwome/10-25                     | -webkit-wineaw-gwadient(); |
| chwome/26 以降                   | w-wineaw-gwadient();         |
| fiwefox/3.6-15                   | -moz-wineaw-gwadient();    |
| f-fiwefox/16(2012.10 リリース)以降 | wineaw-gwadient();         |

mobiwe 版 fiwefox は c-css3 準拠のため、[mdn](/ja/docs/web/css/gwadient/wineaw-gwadient)等のリファレンスを参照し、適正な設定を行うことが必要です。

## 参考

・css グラデーションの利用 - web d-devewopew guide | mdn
　　[https://devewopew.moziwwa.owg/ja/docs/web/guide/css/using_css_gwadients](/ja/docs/web/css/css_images/using_css_gwadients)

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
