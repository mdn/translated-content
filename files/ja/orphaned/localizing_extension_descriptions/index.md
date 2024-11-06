---
title: Localizing extension descriptions
slug: orphaned/Localizing_extension_descriptions
---

### Gecko 1.9 におけるローカライズ

Gecko 1.9 には、アドオンの説明や他のメタデータのローカライズに関して、新しく、より強力な方法が盛り込まれています。各言語の説明はすべて、`em:localized` プロパティを使って [install.rdf](/ja/Install_Manifests) ファイルに書かれます。`em:localized` それぞれが、情報が使われるべきロケールを示す `em:locale` プロパティを少なくとも 1 つと、そのロケールの様々な文字列を持ちます。以下の例はこのデモです (ほとんどの一般的なマニフェストプロパティは簡潔にするため削除してあります)。

```
<?xml version="1.0"?>

<RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:em="http://www.mozilla.org/2004/em-rdf#">
  <Description about="urn:mozilla:install-manifest">
    <em:id>TabSidebar@blueprintit.co.uk</em:id>
    <em:localized>
      <Description>
        <em:locale>de-DE</em:locale>
        <em:name>Tab Sidebar</em:name>
        <em:description>Zeigt in einer Sidebar Vorschaubilder der Inhalte aller offenen Tabs an.</em:description>
      </Description>
    </em:localized>
    <em:localized>
      <Description>
        <em:locale>es-ES</em:locale>
        <em:name>Tab Sidebar</em:name>
        <em:description>Muestra una vista previa de sus pestañas en su panel lateral.</em:description>
      </Description>
    </em:localized>
    <em:localized>
      <Description>
        <em:locale>nl-NL</em:locale>
        <em:name>Tab Sidebar</em:name>
        <em:description>Laat voorbeeldweergaven van uw tabbladen in de zijbalk zien.</em:description>
      </Description>
    </em:localized>
    <em:name>Tab Sidebar</em:name>
    <em:description>Displays previews of your tabs in your sidebar.</em:description>
  </Description>
</RDF>
```

後で述べるメタデータはすべてこの方法でローカライズできます。`em:localized` プロパティによって提供されるローカライズ情報は、後述の一連のローカライズされたプロパティファイルで上書きされます。

あるロケールに対してどの `em:localized` プロパティを使用するかを選択する手順は以下のようになります。

1. そのロケールに完全に一致する `em:locale` でプロパティが提供されていた場合、それが使われます。
2. 部分的に一致するロケールが見つかった場合、最も一致する部分が多いロケールが使用されます。各部はダッシュで分割されます (例えば es は es-ES に一致し、その逆も同様です)。
3. 一致する部分の数が同じロケールが複数存在する場合は、もっとも一般的なロケールが使用されます (例えば、en-US を検索する際、en は en-GB よりも優先されます)。

現在のアプリケーションロケールが検索された後、フォールバックとして en-US を検索します。

プロパティファイルが設定されておらず、現在のロケールや en-US に一致する `em:localized` プロパティが存在しない場合は、インストール定義ファイルで直接指定されたプロパティが、Gecko 1.9 以前で常に使われていたように、最後の手段として使われます。

### Gecko 1.9 以前のローカライズ

Gecko 1.9 以前では、アドオン開発者は、Firefox や Thunderbird のようなツールキットベースのアプリケーションを対象とする拡張機能にローカライズされた説明を定義するためには以下のような特別な手順が必要でした。

- もしあなたが [ローカライズしたプロパティファイル](/ja/Localizing_an_extension#Localizing_strings_in_JavaScript_code) を作っていないのであれば、それを作ってください。他言語が正しく表示されるように、(BOM なしの)UTF-8 エンコードを使うことを忘れないでください。
- 次の 1 行を、各言語のローカライズしたプロパティファイルに加えてください (EXTENSION_ID はあなたの拡張機能の ID ([install.rdf](/ja/Install_Manifests) の `<em:id>` にあります) に合わせてください。また、_LOCALIZED_DESCRIPTION_ にはその言語での拡張機能の説明を入れてください)。

  ```
  extensions.EXTENSION_ID.description=LOCALIZED_DESCRIPTION
  ```

<!---->

- もしあなたが [デフォルト設定ファイル](/ja/Building_an_Extension#Defaults_Files) を作っていないのであれば、それを作ってください。
- 次の 1 行を、デフォルト設定ファイルに加えてください (_EXTENSION_ID_ は拡張機能の ID ([install.rdf](/ja/Install_Manifests) から)、_PATH_TO_LOCALIZATION_FILE_ は上であなたが加えた、ローカライズしたプロパティファイルへの chrome パスです)。

  ```
  pref("extensions.EXTENSION_ID.description", "PATH_TO_LOCALIZATION_FILE");
  ```

#### ローカライズ可能な文字列

この方法でローカライズできるアドオンのメタデータを列挙します。

- name
- description
- creator
- homepageURL

#### ローカライズ可能なリスト

複数の値が存在する場合、設定名の後ろに数字を付けます。

```
extensions.EXTENSION_ID.contributor.1=FIRST_LOCALIZED_CONTRIBUTOR_NAME
extensions.EXTENSION_ID.contributor.2=SECOND_LOCALIZED_CONTRIBUTOR_NAME
extensions.EXTENSION_ID.contributor.3=THRID_LOCALIZED_CONTRIBUTOR_NAME

pref("extensions.EXTENSION_ID.contributor.1", "PATH_TO_LOCALIZATION_FILE");
pref("extensions.EXTENSION_ID.contributor.2", "PATH_TO_LOCALIZATION_FILE");
pref("extensions.EXTENSION_ID.contributor.3", "PATH_TO_LOCALIZATION_FILE");
```

この方法でローカライズできるアドオンのメタデータを列挙します。

- developer
- translator
- contributor
