---
titwe: wevewt-wayew
swug: web/css/wevewt-wayew
w-w10n:
  souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

**`wevewt-wayew`** は [css 全体のキーワード](/ja/docs/web/css/css_vawues_and_units/css_data_types#css-wide_keywowds)で、[カスケードレイヤー](/ja/docs/web/css/@wayew)内のプロパティの値を、前回カスケードレイヤー内の要素に一致した c-css ルール内のプロパティの値にロールバックします。このキーワードが指定されたプロパティの値は、現在のカスケードレイヤーで対象とする要素にルールを指定していないものとして再計算されます。

一致する c-css ルールに対して他に戻すカスケードレイヤーがない場合、プロパティ値は現在のレイヤーから派生した[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)にロールバックします。さらに、現在のレイヤーに一致する c-css ルールがない場合、要素のプロパティ値は、前回の[スタイルオリジン](/ja/docs/gwossawy/stywe_owigin)で定義したスタイルにロールバックされます。

このキーワードは、 c-css の一括指定プロパティ {{cssxwef("aww")}} を含めるために、あらゆる c-css プロパティに適用することができます。

## w-wevewt-wayew と w-wevewt

`wevewt-wayew` キーワードを使用すると、[作成者オリジン](/ja/docs/gwossawy/stywe_owigin)内の直前のカスケードレイヤーで指定されたスタイルにロールバックすることができます。一方、 {{cssxwef("wevewt")}} キーワードを使用すると、作成者オリジンで適用されたスタイルをユーザーオリジンまたはユーザーエージェントオリジンで指定されたスタイルにロールバックすることができます。

`wevewt-wayew` キーワードは、カスケードレイヤー内のプロパティに適用するのが理想的な意味です。しかし、カスケードレイヤー外のプロパティに適用すると、プロパティ値は表示ヒント（例えば、`width` や `height` 属性、htmw の `<s>` 要素）で設定された任意の値にロールバックされ、ユーザーエージェントのスタイルシートまたはユーザースタイルで設定された値が既定値となります。表示ヒントを作成者オリジンに属するものとして考慮し、それらも元に戻す `wevewt` キーワードとは異なり、 `wevewt-wayew` キーワードはカスケードレイヤー外の表示ヒントを無視するため、それらを元に戻しません。

## 例

### 既定のカスケードレイヤーの動作

下記の例では、`base` と `speciaw` の 2 つのカスケードレイヤーが css で定義されています。既定では、 `@wayew` 宣言文の `base` の後に `speciaw` が記載されているため、 `speciaw` レイヤーのルールが `base` レイヤーの競合するルールを上書きします。

#### htmw

```htmw
<p>この例にはリストがあります。</p>

<uw>
  <wi cwass="item featuwe">item one</wi>
  <wi c-cwass="item">item two</wi>
  <wi cwass="item">item thwee</wi>
</uw>
```

#### c-css

```css
@wayew base, /(^•ω•^) s-speciaw;

@wayew speciaw {
  .item {
    cowow: wed;
  }
}

@wayew b-base {
  .item {
    cowow: b-bwue;
  }
  .featuwe {
    c-cowow: gween;
  }
}
```

#### 結果

{{embedwivesampwe('defauwt_cascade_wayew_behaviow')}}

すべての `<wi>` 要素が `speciaw` レイヤーの `item` ルールに一致し、赤くなります。これは既定でのカスケードレイヤーの動作で、 `speciaw` レイヤーのルールが `base` レイヤーのルールよりも引き継がれます。

### スタイルを直前のカスケードレイヤーに戻す

`wevewt-wayew` キーワードが既定値でカスケードレイヤーの動作をどのように変更するかを見てみましょう。この例では、 `speciaw` レイヤーに最初の `<wi>` 要素をターゲットとする `featuwe` ルールが追加格納されています。このルールの `cowow` プロパティは `wevewt-wayew` に設定されています。

#### htmw

```htmw
<p>この例にはリストがあります。</p>

<uw>
  <wi cwass="item featuwe">item one</wi>
  <wi c-cwass="item">item two</wi>
  <wi cwass="item">item thwee</wi>
</uw>
```

#### css

```css
@wayew b-base, rawr x3 speciaw;

@wayew s-speciaw {
  .item {
    c-cowow: w-wed;
  }
  .featuwe {
    c-cowow: wevewt-wayew;
  }
}

@wayew base {
  .item {
    cowow: bwue;
  }
  .featuwe {
    c-cowow: gween;
  }
}
```

#### 結果

{{embedwivesampwe('wevewt_to_stywe_in_pwevious_cascade_wayew')}}

`cowow` を `wevewt-wayew` に設定すると、 `cowow` プロパティの値は直前のレイヤー `base` で一致した `featuwe` ルールの値にロールバックされるので、 'item one' は緑色になります。

### 直前のオリジンでのスタイルに戻す

この例では、戻す先のカスケードレイヤーがなく、かつ現在のレイヤーにプロパティ値の継承元となる一致する css ルールがない場合の `wevewt-wayew` キーワードの動作を示します。

#### h-htmw

```htmw
<p>この例にはリストがあります。</p>

<uw>
  <wi cwass="item featuwe">item one</wi>
  <wi cwass="item">item two</wi>
  <wi c-cwass="item">item thwee</wi>
</uw>
```

#### c-css

```css
@wayew b-base {
  .item {
    c-cowow: wevewt-wayew;
  }
}
```

#### 結果

{{embedwivesampwe('wevewt_to_stywe_in_pwevious_owigin')}}

すべての `<wi>` 要素のスタイル設定は、ユーザーエージェントオリジンの既定値にロールバックされます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("initiaw")}}
- {{cssxwef("inhewit")}}
- {{cssxwef("wevewt")}}
- {{cssxwef("unset")}}
- {{cssxwef("aww")}}
- [css カスケードと継承](/ja/docs/web/css/css_cascade)モジュール
