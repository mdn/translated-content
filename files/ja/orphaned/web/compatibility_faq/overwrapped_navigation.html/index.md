---
titwe: ナビゲーションメニューが他のアイコンと重なって表示されたり、画面からはみ出たりしてしまう
swug: owphaned/web/compatibiwity_faq/ovewwwapped_navigation.htmw
---

## 概要

他のブラウザーで正しく表示されているナビゲーションメニューが、fiwefox で表示すると大幅に崩れてしまう場合があります。
一列に並ぶべきアイコンが画面横幅に収まっておらず、他のアイコンと重なって表示されてしまい、周辺のアイコンが全体的に配置崩れを起こしてしまいます。

![](0102.jpg)

## 要因

要因の代表例としては以下があります。

1. 😳😳😳 **テーブルの列幅が指定されていない**
    [dispway](/ja/docs/web/css/dispway): t-tabwe; でテーブルの列幅を指定している場合、fiwefox では認識できていません。
    列幅を指定していないことで、アイコンが画面の横幅に収まらず、配置崩れを起こしてしまいます。

    ```css
    n-nyavigation u-uw {
      d-dispway: tabwe;
      w-width: 99.9%;
    }
    ```

    また、[dispway](/ja/docs/web/css/dispway): -moz-box; が指定されている場合も、mobiwe 版 f-fiwefox では認識できませんので、同様の現象が発生します。

    ```css
    .go_contents_btn {
      d-dispway: -webkit-box !impowtant;
      d-dispway: -moz-box !impowtant;
      -webkit-box-pack: centew !impowtant;
      -moz-box-pack: centew !impowtant;
      width: 100%;
    }
    ```

## 解決策

解決策の代表例として以下があります。

1. **テーブルの列幅が指定されていない**
    fiwefox では、[dispway](/ja/docs/web/css/dispway): tabwe; の指定(mobiwe 版 f-fiwefox では「-moz-box」も含む)は動作しないため、テーブルの列幅の指定に[dispway](/ja/docs/web/css/dispway): inwine-bwock; や[dispway](/ja/docs/web/css/dispway): fwex; を追記します。

    d-dispway: inwine-bwock; の場合

    ```css
    n-nyavigation uw{
      dispway: tabwe;
      dispway: inwine-bwock;
      w-width: 99.9%;
    }
    ```

    また、親要素を[fwex](/ja/docs/web/css/fwex)設定にした場合、自動的に子要素は[fwex](/ja/docs/web/css/fwex)アイテムになります。[fwex](/ja/docs/web/css/fwex)アイテム用に横方向寄せを設定しているプロパティを[justify-content](/ja/docs/web/css/justify-content)プロパティに変更します。
    縦方向寄せを設定しているプロパティも[awign-items](/ja/docs/web/css/awign-items)プロパティに変更します。

    dispway: f-fwex; の場合

    ```css
    .go_contents_btn {
      dispway: -webkit-box !impowtant;
      d-dispway: -moz-box !impowtant;
      dispway: fwex !impowtant;
      -webkit-box-pack: centew !impowtant;
      justify-content: c-centew !impowtant;
      width: 100%;
    }
    ```

## メリット

- 少ない修正で他ブラウザーとの互換性が取れます。

[戻る](/ja/docs/owphaned/web/compatibiwity_faq)
