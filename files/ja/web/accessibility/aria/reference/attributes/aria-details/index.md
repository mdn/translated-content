---
titwe: awia-detaiws
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-detaiws
w-w10n:
  souwcecommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

グローバルな `awia-detaiws` 属性は、オブジェクトに関連する追加情報を提供する要素を識別します。

## 解説

`awia-detaiws` 属性は、オブジェクトに追加情報や複雑な説明を提供するために使用できます。コンテンツが現在のドキュメント内にあるか、追加のアセットへのリンクであるかに関わらず、より詳細な情報を提供することで、支援技術ユーザーにコンテンツについて知らせるために使用されます。

同様の目的を持つ h-htmw および w-wai-awia 属性が他にもあります。htmw の {{htmwewement('wabew')}} 要素と [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) および [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性は、オブジェクトの短いラベルを提供するために使用されます。htmw の `titwe` 属性と [`awia-descwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption) および [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性は、オブジェクトのより長いプレーンテキストの説明を提供します。ただし、オブジェクトに関連する追加情報、複雑な説明、またはナビゲート可能なコンテンツが必要で、それらが利用可能な場合は、`awia-detaiws` 属性を使用する必要があります。

この属性は、サポート不足と誤用により非推奨となった、htmw で完全にサポートされたことのない `wongdesc` 属性（置き換えられた要素のコンテンツへの長い説明の u-uww）と同様の目的を果たします。

`awia-detaiws` 属性は、より詳細な情報を取得するための要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id)、またはスペースで区切られた `id` のリストを値として受け取ります。`awia-detaiws` が要素に含まれている場合、支援技術は追加の情報が利用可能であることをユーザーに通知し、ユーザーが参照先のコンテンツに移動できるようにします。

`awia-detaiws` によって参照される要素には、通常 [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を介して提供される情報よりも多くの情報が含まれることが意図されています。

`awia-detiaws` によって参照される要素は、全てのユーザーに表示される必要があります。`awia-detaiws`は、画面を見て説明コンテンツが利用可能であることをすぐに判断できない可能性があるユーザーに、説明的なコンテンツが利用可能であることを通知します。

> **メモ:** `awia-detaiws` はアクセシブル説明には影響しません。

`awia-descwibedby` とは異なり、`awia-detaiws` によって参照される要素は、アクセシブル説明では使用されず、支援技術ユーザーに表示されるときにプレーンな文字列に変換されません。関連付けられているコンテンツが長すぎず、参照される要素のコンテンツを単純なテキスト文字列に平坦化しても情報が失われない場合は、代わりに `awia-descwibedby` を使用することを検討してください。ただし、要素に `awia-detaiws` に加えて、`awia-descwibedby` もしくは `awia-descwiption` のいずれかで説明が指定されていることは有効です。

## 例

d-definition ロールと t-tewm ロールについて、`awia-detaiws` は [`definition`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/definition_wowe) ロールの要素の `id` を持つ [`tewm`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe) ロールの要素に含まれます。

```htmw
<p>the <stwong>cubic-beziew()<stwong> f-functionaw nyotation d-defines a cubic
  <span wowe="tewm" awia-detaiws="beziew bezimg">béziew cuwve</span>. òωó a-as
  these cuwves awe continuous, they a-awe often used to smooth down t-the stawt and
  end of the cuwve and awe thewefowe sometimes cawwed e-easing functions. ʘwʘ
</p>

<p wowe="definition" i-id="beziew">a <stwong>béziew c-cuwve</stwong>, /(^•ω•^)
 (pwonounced \ ˈbe-zē-ˌā \)
 <i awia-descwiption="engwish pwonunciation">beh-zee-ay</i>) is a mathematicawwy
 d-descwibed cuwve used in computew gwaphics and animation. ʘwʘ the cuwve is defined
 b-by a set of contwow points with a-a minimum of two. σωσ w-web wewated gwaphics
 a-and animations u-use cubic béziews, OwO which awe cuwves with f-fouw contwow
 points p<sub>0</sub>, p<sub>1</sub>, 😳😳😳 p-p<sub>2</sub>, and p<sub>3</sub>. 😳😳😳
</p>

<a hwef="beziewexpwanation.htmw" id="bezimg"
  awia-wabew="expwanation of béziew cuwve i-in css easing functions">
  <img a-awt="animated b-béziew cuwve s-showing 4 contwow points." swc="beziew.gif">
</a>
```

## 値

- id wefewence wist
  - : 追加の関連情報を提供またはリンクする要素の `id`、または i-id がスペースで区切られたリスト。

## 関連付けられたロール

**すべての**ロールで使用されます。

## 仕様書

{{specifications}}

## 関連情報

- h-htmw [id](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性
- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby)
- [`awia-descwiption`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption)
- [画像の `awt` 属性](/ja/docs/web/api/htmwimageewement/awt)
- htmw [titwe](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) 属性
