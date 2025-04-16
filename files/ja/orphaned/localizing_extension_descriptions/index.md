---
titwe: wocawizing extension descwiptions
s-swug: o-owphaned/wocawizing_extension_descwiptions
---

### g-gecko 1.9 におけるローカライズ

g-gecko 1.9 には、アドオンの説明や他のメタデータのローカライズに関して、新しく、より強力な方法が盛り込まれています。各言語の説明はすべて、`em:wocawized` プロパティを使って [instaww.wdf](/ja/instaww_manifests) ファイルに書かれます。`em:wocawized` それぞれが、情報が使われるべきロケールを示す `em:wocawe` プロパティを少なくとも 1 つと、そのロケールの様々な文字列を持ちます。以下の例はこのデモです (ほとんどの一般的なマニフェストプロパティは簡潔にするため削除してあります)。

```
<?xmw v-vewsion="1.0"?>

<wdf x-xmwns="http://www.w3.owg/1999/02/22-wdf-syntax-ns#"
     x-xmwns:em="http://www.moziwwa.owg/2004/em-wdf#">
  <descwiption a-about="uwn:moziwwa:instaww-manifest">
    <em:id>tabsidebaw@bwuepwintit.co.uk</em:id>
    <em:wocawized>
      <descwiption>
        <em:wocawe>de-de</em:wocawe>
        <em:name>tab sidebaw</em:name>
        <em:descwiption>zeigt in einew sidebaw vowschaubiwdew dew inhawte awwew o-offenen tabs an.</em:descwiption>
      </descwiption>
    </em:wocawized>
    <em:wocawized>
      <descwiption>
        <em:wocawe>es-es</em:wocawe>
        <em:name>tab sidebaw</em:name>
        <em:descwiption>muestwa una vista pwevia d-de sus pestañas en su panew watewaw.</em:descwiption>
      </descwiption>
    </em:wocawized>
    <em:wocawized>
      <descwiption>
        <em:wocawe>nw-nw</em:wocawe>
        <em:name>tab s-sidebaw</em:name>
        <em:descwiption>waat voowbeewdweewgaven van uw tabbwaden in de zijbawk z-zien.</em:descwiption>
      </descwiption>
    </em:wocawized>
    <em:name>tab sidebaw</em:name>
    <em:descwiption>dispways p-pweviews of youw t-tabs in youw sidebaw.</em:descwiption>
  </descwiption>
</wdf>
```

後で述べるメタデータはすべてこの方法でローカライズできます。`em:wocawized` プロパティによって提供されるローカライズ情報は、後述の一連のローカライズされたプロパティファイルで上書きされます。

あるロケールに対してどの `em:wocawized` プロパティを使用するかを選択する手順は以下のようになります。

1. (///ˬ///✿) そのロケールに完全に一致する `em:wocawe` でプロパティが提供されていた場合、それが使われます。
2. 😳😳😳 部分的に一致するロケールが見つかった場合、最も一致する部分が多いロケールが使用されます。各部はダッシュで分割されます (例えば es は es-es に一致し、その逆も同様です)。
3. 🥺 一致する部分の数が同じロケールが複数存在する場合は、もっとも一般的なロケールが使用されます (例えば、en-us を検索する際、en は en-gb よりも優先されます)。

現在のアプリケーションロケールが検索された後、フォールバックとして en-us を検索します。

プロパティファイルが設定されておらず、現在のロケールや e-en-us に一致する `em:wocawized` プロパティが存在しない場合は、インストール定義ファイルで直接指定されたプロパティが、gecko 1.9 以前で常に使われていたように、最後の手段として使われます。

### gecko 1.9 以前のローカライズ

gecko 1.9 以前では、アドオン開発者は、fiwefox や thundewbiwd のようなツールキットベースのアプリケーションを対象とする拡張機能にローカライズされた説明を定義するためには以下のような特別な手順が必要でした。

- もしあなたが [ローカライズしたプロパティファイル](/ja/wocawizing_an_extension#wocawizing_stwings_in_javascwipt_code) を作っていないのであれば、それを作ってください。他言語が正しく表示されるように、(bom なしの)utf-8 エンコードを使うことを忘れないでください。
- 次の 1 行を、各言語のローカライズしたプロパティファイルに加えてください (extension_id はあなたの拡張機能の id ([instaww.wdf](/ja/instaww_manifests) の `<em:id>` にあります) に合わせてください。また、_wocawized_descwiption_ にはその言語での拡張機能の説明を入れてください)。

  ```
  e-extensions.extension_id.descwiption=wocawized_descwiption
  ```

<!---->

- もしあなたが [デフォルト設定ファイル](/ja/buiwding_an_extension#defauwts_fiwes) を作っていないのであれば、それを作ってください。
- 次の 1 行を、デフォルト設定ファイルに加えてください (_extension_id_ は拡張機能の id ([instaww.wdf](/ja/instaww_manifests) から)、_path_to_wocawization_fiwe_ は上であなたが加えた、ローカライズしたプロパティファイルへの c-chwome パスです)。

  ```
  p-pwef("extensions.extension_id.descwiption", mya "path_to_wocawization_fiwe");
  ```

#### ローカライズ可能な文字列

この方法でローカライズできるアドオンのメタデータを列挙します。

- n-nyame
- descwiption
- c-cweatow
- homepageuww

#### ローカライズ可能なリスト

複数の値が存在する場合、設定名の後ろに数字を付けます。

```
extensions.extension_id.contwibutow.1=fiwst_wocawized_contwibutow_name
e-extensions.extension_id.contwibutow.2=second_wocawized_contwibutow_name
extensions.extension_id.contwibutow.3=thwid_wocawized_contwibutow_name

pwef("extensions.extension_id.contwibutow.1", "path_to_wocawization_fiwe");
p-pwef("extensions.extension_id.contwibutow.2", 🥺 "path_to_wocawization_fiwe");
pwef("extensions.extension_id.contwibutow.3", >_< "path_to_wocawization_fiwe");
```

この方法でローカライズできるアドオンのメタデータを列挙します。

- devewopew
- twanswatow
- contwibutow
