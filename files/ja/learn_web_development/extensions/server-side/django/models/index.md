---
title: "Django チュートリアル Part 3: モデルの使用"
short-title: "3: モデル"
slug: Learn_web_development/Extensions/Server-side/Django/Models
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}

この記事では、LocalLibrary ウェブサイトのモデルを定義する方法について説明します。モデルとは何か、その宣言方法、および主なフィールド型について解説します。また、モデルデータにアクセスするための主な方法についても簡単に紹介します。

<table>
  <tbody>
    <tr>
      <th>前提条件:</th>
      <td>
        <a href="/ja/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website">Django チュートリアル Part 2: スケルトンウェブサイトの作成</a>
      </td>
    </tr>
    <tr>
      <th>目的:</th>
      <td>
        <p>
          適切なフィールドを選択し、独自のモデルを設計・作成できるようになること。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 概要

Django のウェブアプリケーションは、「モデル」と呼ばれる Python オブジェクトを通じてデータにアクセスし、管理します。モデルは、保存されるデータの_構造_を定義するもので、これにはフィールドの_型_や、場合によっては最大サイズ、デフォルト値、選択リストのオプション、ドキュメント用のヘルプテキスト、フォーム用のラベルテキストなどが含まれます。モデルの定義は、基盤となるデータベースに依存しません。プロジェクトの設定の一環として、いくつかのデータベースの中から任意のものを選択することができます。使用するデータベースを選択したら、データベースと直接やり取りする必要はまったくありません。モデル構造やその他のコードを記述するだけで、データベースとの通信に関する面倒な作業はすべて Django が代行してくれます。

このチュートリアルでは、[LocalLibrary ウェブサイト](/ja/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) のサンプルにおけるモデルの定義方法と、そのモデルへのアクセス方法について説明します。

## LocalLibrary モデルの設計

すぐにモデルのコーディングに取り掛かる前に、どのようなデータを保存する必要があるか、また、さまざまなオブジェクト間の関係について、少し時間をかけて考えておく価値があります。

書籍に関する情報（タイトル、あらすじ、著者、執筆言語、カテゴリー、ISBN）を保存する必要があることは分かっていますし、同じ書籍の複数のコピーが存在する可能性もあります（グローバルに一意なIDや在庫状況など）。著者については、名前だけでなくさらに詳しい情報を保存する必要があるかもしれませんし、同じ名前や似た名前の著者が複数いる可能性もあります。また、書籍のタイトル、著者、執筆言語、カテゴリーに基づいて情報を並べ替えられるようにしたいと考えています。

モデルを設計する際は、それぞれの「オブジェクト」（関連する情報のグループ）ごとに個別のモデルを用意するのが理にかなっています。この場合、明らかなオブジェクトとしては、書籍、書籍のインスタンス、著者が挙げられます。

また、選択肢をウェブサイト自体にハードコーディングするのではなく、モデルを使用して選択リストのオプション（例：選択肢のドロップダウンリスト）を表現することも検討すべきです。これは、すべてのオプションが最初から判明していない場合や、変更される可能性がある場合に推奨されます。この場合のモデルとして考えられるものには、書籍のジャンル（例：SF、フランス詩など）や言語（英語、フランス語、日本語）などがあります。

モデルとフィールドが決まったら、次は関係について考える必要があります。Django では、1 対 1 (`OneToOneField`)、1 対多 (`ForeignKey`)、多対多 (`ManyToManyField`) の関係を定義できます。

その点を踏まえて、以下の UML 関連図には、このケースで定義するモデル（ボックスとして）が示されています。

![Book クラス内の Author の多重度が固定された LocalLibrary モデルの UML](local_library_model_uml.svg)

書籍（書籍の一般的な詳細）、書籍インスタンス（システム内で利用可能な特定の物理的な書籍のステータス）、および著者のモデルを作成しました。また、管理インターフェイスを通じて値を作成・選択できるようにするため、ジャンル用のモデルを設けることにしました。`BookInstance:status` についてはモデルを設けないことにしました。これらの値 (`LOAN_STATUS`) は変更されることがないと想定されるため、ハードコーディングしています。各ボックス内には、モデル名、フィールド名と型、およびメソッドとその返値の型が表示されています。

この図には、多重度を含むモデル間の関係も示されています。多重度とは、図中の数字のことで、その関係に存在し得る各モデルの数（最大値と最小値）を示しています。例えば、ボックス間の接続線は、Book と Genre が関連していることを示しています。 Genre モデルに近い数字は、1 冊の本が 1 つ以上のジャンル（いくつでも可）を持つ必要があることを示しており、一方、Book モデルの隣にある線の反対側の数字は、1 つのジャンルが0冊または複数の本に関連付けられることを示しています。

> [!NOTE]
> 次の節では、モデルの定義や使用方法について解説する基礎的な入門編を紹介します。これを読み進めながら、上の図に示された各モデルをどのように構築していくかを考えてみてください。

## モデル入門

この節では、モデルの定義方法の概要と、特に重要なフィールドおよびフィールド引数について簡単に説明します。

### モデル定義

モデルは通常、アプリケーションの **models.py** ファイルで定義されます。モデルは `django.db.models.Model` のサブクラスとして実装され、フィールド、メソッド、メタデータを含めることができます。以下のコード片は、`MyModelName` という名前の「典型的な」モデルを示しています。

```python
from django.db import models
from django.urls import reverse

class MyModelName(models.Model):
    """A typical class defining a model, derived from the Model class."""

    # Fields
    my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
    # …

    # Metadata
    class Meta:
        ordering = ['-my_field_name']

    # Methods
    def get_absolute_url(self):
        """Returns the URL to access a particular instance of MyModelName."""
        return reverse('model-detail-view', args=[str(self.id)])

    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.my_field_name
```

以下の節では、このモデルに含まれる各機能を詳しく見ていきます。

#### フィールド

モデルには、任意の数のフィールドを、任意の型で持つことができます。各フィールドは、データベースのテーブルのいずれかに格納したいデータの列を表します。データベースの各レコード（行）は、各フィールドの値で構成されます。以下の例を見てみましょう。

```python
my_field_name = models.CharField(max_length=20, help_text='Enter field documentation')
```

上記の例には、`models.CharField` 型の `my_field_name` という単一のフィールドがあります。これは、このフィールドが英数字の文字列を含むことを意味します。フィールド型は特定のクラスを使用して割り当てられ、それによってデータベースにデータを格納するために使用されるレコードの型や、HTML フォームから値を受け取った際に適用される検証基準（つまり、有効な値の条件）が決定されます。フィールド型には、フィールドの保存方法や使用方法をさらに詳細に指定する引数を指定することもできます。この例では、フィールドに 2 つの引数を指定しています。

- `max_length=20` — このフィールドの値の最大長が 20 文字であることを指定します。
- `help_text='Enter field documentation'` — ユーザーがフィールドの使い方を理解できるよう、フォームに表示されるヘルプテキストです。

フィールド名は、クエリーやテンプレート内でそのフィールドを参照するために使用されます。
フィールドにはラベルもあり、これは `verbose_name` 引数（デフォルト値は `None`）を使用して指定されます。
`verbose_name` が設定されていない場合、ラベルはフィールド名から、アンダースコアをすべて空白に置き換え、最初の文字を大文字にして作成されます（たとえば、フィールド `my_field_name` は、フォームで使用される際のデフォルトラベルが _My field name_ となります）。

フィールドの宣言順序は、モデルがフォーム（例：管理サイト）でレンダリングされる際のデフォルトの順序に影響しますが、これは上書き可能です。

##### 共通フィールド引数

さまざまなフィールド型の多く／ほとんどを宣言する際には、次のような共通の引数を使用できます。

- [help_text](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#help-text): 前述の通り、HTML フォーム（例：管理サイト内）にテキストラベルを設定します。
- [verbose_name](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#verbose-name): フィールドラベルで使用される、人間が読むためのフィールド名です。指定しない場合、Django はフィールド名からデフォルトの詳細名を推測します。
- [default](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#default): フィールドのデフォルト値。値または呼び出し可能なオブジェクトを指定できます。呼び出し可能なオブジェクトを指定した場合、新しいレコードが作成されるたびにそのオブジェクトが呼び出されます。
- [null](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#null): `True` の場合、Django は、適切なフィールドについて、空白の値をデータベースに `NULL` として格納します（`CharField` の場合は、代わりに空の文字列が格納されます）。デフォルトは `False` です。
- [blank](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#blank): `True`の場合、フォーム上でそのフィールドを空白にすることができます。デフォルトは`False`であり、これはDjangoのフォーム検証によって値の入力が必須となることを意味します。これは`null=True`と組み合わせて使用されることがよくあります。というのも、空白値を許可する場合、データベースでもそれらを適切に表現できるようにしたいからです。
- [choices](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#choices): このフィールドの選択肢のリストです。これを指定すると、デフォルトのフォームウィジェットは、標準のテキストフィールドではなく、これらの選択肢を含む選択ボックスになります。
- [unique](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#unique):
  `True` の場合、データベース全体でフィールドの値が一意であることを保証します。
  これは、同じ値をとることができないフィールドの重複を防ぐために使用できます。
  デフォルトは `False` です。
- [primary_key](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#primary-key):
  `True` の場合、現在のフィールドをモデルの主キーとして設定します（主キーとは、テーブル内のすべてのレコードを一意に識別するために指定される、データベースの特別なカラムです）。
  主キーとしてフィールドが指定されていない場合、Django はこの目的のために自動的にフィールドを追加します。
  自動生成される主キーフィールドの型は、[`AppConfig.default_auto_field`](https://docs.djangoproject.com/ja/5.0/ref/applications/#django.apps.AppConfig.default_auto_field) でアプリごとに、あるいは [`DEFAULT_AUTO_FIELD`](https://docs.djangoproject.com/ja/5.0/ref/settings/#std:setting-DEFAULT_AUTO_FIELD) 設定でグローバルに指定できます。

  > [!NOTE]
  > **manage.py** を使用して作成されたアプリでは、主キーの型が [BigAutoField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#bigautofield) に設定されます。
  > これは、ローカルライブラリーの **catalog/apps.py** ファイルで確認できます。
  >
  > ```python
  > class CatalogConfig(AppConfig):
  >   default_auto_field = 'django.db.models.BigAutoField'
  > ```

他にも多くのオプションがあります。フィールドオプションの[完全な一覧はこちら](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#field-options)でご覧いただけます。

##### 共通フィールド型

以下のリストでは、よく使われるフィールドの種類をいくつか紹介します。

- [CharField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#django.db.models.CharField) は、短～中程度の長さの固定長文字列を定義するために使用されます。格納するデータの `max_length` を指定する必要があります。
- [TextField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#django.db.models.TextField) は、長さが任意の長い文字列に使用されます。フィールドの `max_length` を指定することは可能ですが、これはフィールドがフォームに表示される場合にのみ使用されます（データベースレベルでは強制されません）。
- [IntegerField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#django.db.models.IntegerField) は、整数値を格納し、フォーム内に入力された値が整数であるかどうかを検証するためのフィールドです。
- [DateField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#datefield) および [DateTimeField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/# datetimefield) は、日付および日時情報を（それぞれ Python の `datetime.date` および `datetime.datetime` オブジェクトとして）格納・表現するために使用されます。これらのフィールドでは、さらに（相互に排他的な）引数 `auto_now=True`（モデルが保存されるたびにフィールドを現在の日付に設定する）、`auto_now_add`（モデルが最初に作成されたときのみ日付を設定する）、`default`（ユーザーが上書き可能なデフォルトの日付を設定する）を宣言することができます。
- [EmailField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#emailfield) は、メールアドレスの保存と検証に使用されます。
- [FileField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#filefield) および [ImageField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#imagefield) は、それぞれファイルと画像のアップロードに使用されます（`ImageField` では、アップロードされたファイルが画像であるかどうかの追加検証が行われます）。これらには、アップロードされたファイルの保存方法や保存場所を定義するための引数があります。
- [AutoField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#autofield) は、自動的にインクリメントされる `IntegerField` の特殊な型です。主キーを明示的に指定しない場合、この型の主キーがモデルに自動的に追加されます。
- [ForeignKey](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#foreignkey)は、別のデータベースモデルとの 1 対多の関係を指定するために使用されます（例：1 台の車には 1 つのメーカーがありますが、1 つのメーカーは複数の車を作ることができます）。関係の「1 対」側は「キー」を含むモデルです（その「キー」を参照する「外部キー」を含むモデルは、そのような関係の「多対」側に位置します）。
- [ManyToManyField](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#manytomanyfield) は、多対多のリレーションシップを指定するために使用されます（例：1 冊の本には複数のジャンルがあり、各ジャンルには複数の本が含まれる）。このライブラリーアプリでは、これらを `ForeignKeys` と非常によく似た方法で使用しますが、グループ間の関係を記述するために、より複雑な方法で使用することも可能です。これらには、関連付けられたレコードが削除された際の動作を定義する `on_delete` 引数があります（例：`models.SET_NULL` を指定すると、値が `NULL` に設定されます）。

他にも、さまざまな種類のフィールドがあります。これには、さまざまな種類の数値（大きな整数、小さな整数、浮動小数点数）、論理値、URL、スラッグ、一意の ID、およびその他の「時間関連」の情報（期間、時刻など）用のフィールドが含まれます。[完全なリストはこちら](https://docs.djangoproject.com/ja/5.0/ref/models/fields/#field-types)でご覧いただけます。

#### メタデータ

図に示すように、`class Meta` を宣言することで、モデルに対するモデルレベルのメタデータを定義できます。

```python
class Meta:
    ordering = ['-my_field_name']
```

このメタデータの最も便利な機能の一つは、モデル型をクエリーした際に返されるレコードの_デフォルトの並べ替え順_を制御できることです。これを行うには、上記のように、`ordering` 属性にフィールド名のリストを指定して並べ替え順序を指定します。並べ替え順序はフィールドの種類によって異なります（文字フィールドはアルファベット順に、日付フィールドは時系列順に並べ替えられます）。上記のように、フィールド名の先頭にマイナス記号 (-) を付けることで、並べ替え順序を逆順にすることができます。

例えば、書籍をデフォルトで次のように並べ替える場合。

```python
ordering = ['title', '-publish_date']
```

書籍は、タイトルごとにアルファベット順（A～Z）に並べられ、各タイトル内では出版日順（新しいものから古いものへ）に並べられます。

もう 1 つの一般的な属性として、`verbose_name` があります。これは、クラスの詳細な名称（単数形および複数形）です：

```python
verbose_name = 'BetterName'
```

クラスのメタデータを使用すると、モデルに対して新しい「アクセス権限」を作成・適用したり（デフォルトの権限は自動的に適用されます）、別のフィールドに基づく並べ替えを許可したり、保存可能なデータの値について[制約](https://docs.djangoproject.com/ja/5.0/ ref/models/constraints/）を定義したり、クラスを「抽象クラス」（レコードを作成できない基底クラスであり、他のモデルを作成する際の基底として使用される）として宣言したりするために使用できます。
その他のメタデータオプションの多くは、モデルに使用するデータベースやデータの保存方法を制御するものです（これらは、モデルを既存のデータベースにマッピングする必要がある場合にのみ、実質的に有用です）。
メタデータオプションの完全な一覧は、[モデルメタデータオプション](https://docs.djangoproject.com/ja/5.0/ref/models/options/) (Django docs) で確認できます。

#### メソッド

モデルはメソッドも持つことができます。

**少なくとも、すべてのモデルにおいて、各オブジェクトに対して人間が読み取れる文字列を返すよう、標準の Python クラスメソッド `__str__()` を定義する必要があります。** この文字列は、管理サイト（およびモデルインスタンスを参照する必要があるその他の場所）で個々のレコードを表すために使用されます。多くの場合、このメソッドはモデルのタイトルや名前フィールドを返します。

```python
def __str__(self):
    return self.my_field_name
```

Django のモデルに組み込むもう 1 つの一般的なメソッドが `get_absolute_url()` です。これは、ウェブサイト上で個々のモデルレコードを表示するための URL を返します（このメソッドを定義すると、Django は管理サイトのモデルレコード編集画面に自動的に「サイトで表示」ボタンを追加します）。`get_absolute_url()` の典型的なパターンを以下に示します。

```python
def get_absolute_url(self):
    """Returns the URL to access a particular instance of the model."""
    return reverse('model-detail-view', args=[str(self.id)])
```

> [!NOTE]
> モデルの個々のレコードを表示するために `/my-application/my-model-name/2` のような URL を使用する場合（ここで "2" は特定のレコードの `id` です）、レスポンスと ID を「モデル詳細ビュー」（レコードの表示に必要な処理を行う）に渡すための URL マッパーを作成する必要があります。上記の `reverse()` 関数は、正しい形式の URL を作成するために、URL マッパー（上記の例では _'model-detail-view'_ という名前）を「逆引き」することができます。
>
> もちろん、これを機能させるには、URL マッピング、ビュー、テンプレートを記述する必要があります。

また、必要に応じて他のメソッドを自由に定義し、コードやテンプレートからそれらを呼び出すこともできます（ただし、引数を一切受け取らない場合に限ります）。

### モデル管理

モデルクラスを定義したら、それらを使用してレコードの作成、更新、削除を行ったり、クエリーを実行してすべてのレコードや特定のレコードのサブセットを取得したりすることができます。その方法については、チュートリアルでビューを定義する際に詳しく説明しますが、ここでは簡単にまとめます。

#### レコードの作成と変更

レコードを作成するには、モデルのインスタンスを定義し、`save()` を呼び出します。

```python
# モデルのコンストラクターを使用して、新しいレコードを作成
record = MyModelName(my_field_name="Instance #1")

# そのオブジェクトをデータベースに保存
record.save()
```

> [!NOTE]
> もしどのフィールドも `primary_key` として指定していない場合、新しいレコードには自動的に `id` というフィールド名が割り当てられます。上記のレコードを保存した後、このフィールドをクエリで取得すると、その値は 1 になります。

ドット構文を使用すると、この新しいレコードのフィールドにアクセスして、その値を変更することができます。変更した値をデータベースに保存するには、`save()` を呼び出す必要があります。

```python
# Python の属性を使用して、モデルフィールドの値にアクセス
print(record.id) # should return 1 for the first record.
print(record.my_field_name) # should print 'Instance #1'

# フィールドを変更してレコードを更新し、save() を呼び出す
record.my_field_name = "New Instance Name"
record.save()
```

#### 記録の検索

モデルの `objects` 属性（基底クラスによって提供される）を使用すると、特定の条件に一致するレコードを検索できます。

> [!NOTE]
> "abstract"モデルやフィールド名を使ってレコードを検索する方法を説明するのは、少々分かりにくいかもしれません。以下の説明では、`title` および `genre` フィールドを持つ `Book` モデルを例に挙げます。ここで、genre もまた、`name` という単一のフィールドを持つモデルです。

`objects.all()` を使用すると、モデルのすべてのレコードを `QuerySet` として取得できます。`QuerySet` は反復可能なオブジェクトであり、反復処理やループを実行できる複数のオブジェクトを含んでいます。

```python
all_books = Book.objects.all()
```

Djangoの`filter()`メソッドを使用すると、返された`QuerySet`をフィルタリングして、指定された**テキスト**または**数値**フィールドが特定の条件に一致するようにすることができます。たとえば、タイトルに "wild" を含む書籍をフィルタリングして、その数をカウントするには、次のようにします。

```python
wild_books = Book.objects.filter(title__contains='wild')
number_wild_books = wild_books.count()
```

照合するフィールドと一致の型は、filter の引数の名前で、`field_name__match_type` という形式で定義されます（上記の `title` と `contains` の間に二重アンダースコアがある点に注意してください）。
上記では、`title` を大文字小文字を区別する一致でフィルタリングしています。他にも、`icontains`（大文字小文字を区別しない）、`iexact`（大文字小文字を区別しない完全一致）、`exact`（大文字小文字を区別する完全一致）、`in`、`gt`（より大きい）、`startswith` など、さまざまな一致型があります。[完全なリストはこちら](https://docs.djangoproject.com/ja/5.0/ref/models/querysets/#field-lookups)です。

場合によっては、別のモデルとの一対多の関係（例：`ForeignKey`）を定義するフィールドでフィルタリングする必要が生じます。この場合、追加の二重アンダースコアを使用して、関連するモデル内のフィールドを「インデックス」として指定できます。
例えば、特定のジャンルパターンを持つ書籍をフィルタリングするには、以下に示すように、`genre` フィールドを介して `name` フィールドをインデックスとして指定する必要があります：

```python
# フィクション、SF、ノンフィクションなどのジャンルに一致します。
books_containing_genre = Book.objects.filter(genre__name__icontains='fiction')
```

> [!NOTE]
> アンダースコア (`__`) を使用すると、関係 (`ForeignKey`/`ManyToManyField`) をいくつでも階層的に指定できます。
> たとえば、さらに「表紙」という関係を用いて定義された、異なる種類を持つ`Book`の場合、引数名は `type__cover__name__exact='hard'` となる可能性があります。

クエリーでは、関連するモデルからの逆方向検索、フィルターの連鎖、より少ない値のセットの返却など、他にもさまざまなことが可能です。詳しくは、[クエリを作成する](https://docs.djangoproject.com/ja/5.0/topics/db/queries/) (Django Docs) を参照してください。

## LocalLibrary モデルの定義

このセクションでは、ライブラリー用のモデルの定義を始めます。`models.py`（/django-locallibrary-tutorial/catalog/ 内）を開きます。ファイルの先頭にある定型コードでは、_models_ モジュールがインポートされています。このモジュールには、私たちのモデルが継承するモデル基底クラス `models.Model` が含まれています。

```python
from django.db import models

# ここでモデルを作成
```

### Genre モデル

以下の `Genre` モデルのコードをコピーし、`models.py` ファイルの末尾に貼り付けてください。このモデルは、書籍のカテゴリーに関する情報（例えば、フィクションかノンフィクションか、恋愛小説か軍事史かなど）を保存するために使用されます。
前述の通り、ジャンルを自由入力や選択リストではなくモデルとして作成したのは、許容される値をハードコーディングするのではなく、データベースを通じて管理できるようにするためです。

```python
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID

from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(
        max_length=200,
        unique=True,
        help_text="Enter a book genre (e.g. Science Fiction, French Poetry etc.)"
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name

    def get_absolute_url(self):
        """Returns the url to access a particular genre instance."""
        return reverse('genre-detail', args=[str(self.id)])

    class Meta:
        constraints = [
            UniqueConstraint(
                Lower('name'),
                name='genre_name_case_insensitive_unique',
                violation_error_message = "Genre already exists (case insensitive match)"
            ),
        ]
```

このモデルには、ジャンルを記述するために使用される単一の `CharField` フィールド (`name`) があります（文字数は 200 文字までに制限されており、`help_text` も設定されています）。
各ジャンルにつきレコードは 1 つだけであるべきため、このフィールドを一意 (`unique=True`) に設定しています。
フィールドの後に、特定のレコードで定義されたジャンルの名前を返す `__str__()` メソッドを宣言しています。詳細名は定義されていないため、フォームで使用される際のフィールドラベルは `Name` となります。
次に、`get_absolute_url()` メソッドを宣言します。これは、このモデルの詳細レコードにアクセスするために使用できる URL を返します（これを機能させるには、`genre-detail` という名前の URL マッピングを定義し、関連するビューとテンプレートを定義する必要があります）。

上記のフィールドで `unique=True` を設定すると、_完全に_同じ名前のジャンルが作成されるのを防ぐことができますが、"fantasy", "Fantasy", "FaNtAsY" といったバリエーションについては制限されません。
モデル定義の最後の部分では、モデルの [`constraints`](https://docs.djangoproject.com/ja/5.0/ref/models/options/#constraints) オプションを使用し、`name` フィールドの値の小文字表記がデータベース内で一意でなければならないことを指定し、一意でない場合は `violation_error_message` 文字列を表示するようにしています。
ここではこれ以上の処理は必要ありませんが、1 つまたは複数のフィールドに対して複数の制約を定義することも可能です。
詳細については、[制約のリファレンス](https://docs.djangoproject.com/ja/5.0/ref/models/constraints/)を参照してください。これには、[`UniqueConstraint()`](https://docs.djangoproject.com/ja/5.0/ref/models/constraints/# uniqueconstraint)や、[`Lower()`](https://docs.djangoproject.com/ja/5.0/ref/models/database-functions/#lower) についても記載されています。

### Book モデル

以下の `Book` モデルをコピーし、再びファイルの末尾に貼り付けてください。`Book` モデルは、一般的な意味での入手可能な書籍に関するすべての情報を表していますが、貸し出し可能な特定の物理的な「インスタンス」や「一冊」を表すものではありません。
このモデルでは、`CharField` を使用して書籍の `title` および `isbn` を表現しています。
`isbn` については、最初の無名引数でラベルを明示的に "ISBN" に設定している点に注意してください（そうしないと、デフォルトで "Isbn" になります）。また、すべての書籍に一意の ISBN を持たせるために、引数 `unique` を `True` に設定しています（`unique` 引数を設定すると、そのフィールドの値はテーブル内で一意になります）。
`isbn`（およびジャンル名）とは異なり、`title` は一意に設定されていません。これは、異なる書籍が同じ名前を持つ可能性があるためです。
このモデルでは、`summary` に `TextField` を使用しています。これは、このテキストがかなり長くなる可能性があるためです。

```python
class Book(models.Model):
    """Model representing a book (but not a specific copy of a book)."""
    title = models.CharField(max_length=200)
    author = models.ForeignKey('Author', on_delete=models.RESTRICT, null=True)
    # Foreign Key used because book can only have one author, but authors can have multiple books.
    # Author as a string rather than object because it hasn't been declared yet in file.

    summary = models.TextField(
        max_length=1000, help_text="Enter a brief description of the book")
    isbn = models.CharField('ISBN', max_length=13,
                            unique=True,
                            help_text='13 Character <a href="https://www.isbn-international.org/content/what-isbn'
                                      '">ISBN number</a>')

    # ManyToManyField used because genre can contain many books. Books can cover many genres.
    # Genre class has already been defined so we can specify the object above.
    genre = models.ManyToManyField(
        Genre, help_text="Select a genre for this book")

    def __str__(self):
        """String for representing the Model object."""
        return self.title

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this book."""
        return reverse('book-detail', args=[str(self.id)])
```

ジャンルは `ManyToManyField` であるため、1 冊の本に複数のジャンルが関連付けられ、1 つのジャンルに複数の本が関連付けられます。著者は `ForeignKey` として宣言されているため、各本には 1 人の著者しか関連付けられませんが、1 人の著者は複数の本に関連付けられる可能性があります（実際には、1 冊の本に複数の著者がいる場合もありますが、この実装ではそうではありません）。
どちらのフィールド型においても、関連するモデルクラスは、モデルクラス自体、または関連モデルの名前を含む文字列のいずれかを使用して、最初の無名引数として宣言されます。参照される前に、このファイル内で関連するクラスがまだ定義されていない場合は、モデルの名前を文字列として使用する必要があります。`author` フィールドのその他の重要な引数として、`null=True` があります。これは、著者が選択されていない場合にデータベースが `Null` 値を格納できるようにするものです。また、`on_delete=models.RESTRICT` は、その著者がどの書籍からも参照されている場合、その著者が削除されないようにします。

> [!WARNING]
> デフォルトでは `on_delete=models.CASCADE` となっており、これは著者が削除された場合、この書籍も削除されてしまうことを意味します。ここでは `RESTRICT` を使用していますが、書籍で参照されている間は著者が削除されないように `PROTECT` を使用したり、レコードが削除された場合に書籍の著者を `Null` に設定する `SET_NULL` を使用したりすることも可能です。

また、このモデルでは `__str__()` も定義されており、書籍の `title` フィールドを用いて `Book` レコードを表しています。最後のメソッドである `get_absolute_url()` は、このモデルの詳細レコードにアクセスするために使用できる URL を返します（ここでは、`book-detail` という名前の URL マッピングを定義し、関連するビューとテンプレートを定義する必要があります）。

### BookInstance モデル

次に、以下の `BookInstance` モデルを、他のモデルの下にコピーします。`BookInstance` は、誰かが借りる可能性のある書籍の特定の 1 冊を表しており、その書籍が利用可能かどうかや返却予定日、「版」やバージョンの詳細、および図書館におけるその書籍の一意の ID などの情報が含まれています。

ここで、いくつかのフィールドやメソッドは、すでに見覚えがあるものもあるでしょう。このモデルでは、以下のものが使用されています。

- 関連する `Book` を識別するための `ForeignKey`（1 冊の本には複数のコピーが存在し得ますが、1 つのコピーに対応する `Book` は 1 つだけです）。このキーには `on_delete=models.RESTRICT` が指定されており、`BookInstance` から参照されている間は `Book` を削除できないようにしています。
- 本の版（特定の発売版）を表す `CharField`。

```python
import uuid # Required for unique book instances

class BookInstance(models.Model):

    """Model representing a specific copy of a book (i.e. that can be borrowed from the library)."""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,
                          help_text="Unique ID for this particular book across whole library")
    book = models.ForeignKey('Book', on_delete=models.RESTRICT, null=True)
    imprint = models.CharField(max_length=200)
    due_back = models.DateField(null=True, blank=True)

    LOAN_STATUS = (
        ('m', 'Maintenance'),
        ('o', 'On loan'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=LOAN_STATUS,
        blank=True,
        default='m',
        help_text='Book availability',
    )

    class Meta:
        ordering = ['due_back']

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.id} ({self.book.title})'
```

さらに、いくつかの新しいフィールド型を宣言します。

- `UUIDField` は `id` フィールドに使用され、このモデルの `primary_key` として設定されます。
この型のフィールドは、各インスタンス（図書館にあるすべての書籍）に対してグローバルに一意な値を割り当てます。
- `DateField` は、`due_back` 日付（書籍が貸し出された後、またはメンテナンス終了後に利用可能になる予定の日付）に使用されます。この値は `blank` または `null` になる場合があります（書籍が利用可能な場合に必要です）。モデルのメタデータ (`Class Meta`) は、クエリーでレコードが返される際の並べ替えにこのフィールドを使用します。
- `status` は、選択肢リストを定義する `CharField` です。ご覧の通り、キーと値のペアからなるタプルを定義し、それを `choices` 引数に渡しています。キーと値のペアにおける値は、ユーザーが選択できる表示値であり、キーはオプションが選択された際に実際に保存される値です。また、書籍は書架に陳列される前は利用不可の状態として作成されるため、デフォルト値を 'm'（メンテナンス中）に設定しています。

メソッド `__str__()` は、`BookInstance` オブジェクトを一意の ID と、それに関連付けられた `Book` のタイトルを組み合わせて表現します。

> [!NOTE]
> A little Python:
>
> - Python 3.6 以降では、文字列補間構文（f-文字列とも呼ばれる） `f'{self.id} ({self.book.title})'` を使用できます。
> - このチュートリアルの以前のバージョンでは、[書式化文字列](https://peps.python.org/pep-3101/) の構文を使用していましたが、これも Python で文字列に書式を適用する有効な方法の一つです（例：`『{0} ({1})』.format(self.id, self.book.title)`）。

### Author モデル

**models.py**内の既存のコードの下に、以下の`Author`モデルをコピーしてください。

```python
class Author(models.Model):
    """Model representing an author."""
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField(null=True, blank=True)
    date_of_death = models.DateField('Died', null=True, blank=True)

    class Meta:
        ordering = ['last_name', 'first_name']

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('author-detail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.last_name}, {self.first_name}'
```

これで、すべてのフィールドやメソッドについて理解できたはずです。このモデルでは、著者を「名」「姓」、および「生年月日」と「没年月日」（いずれも省略可能）を持つものとして定義しています。また、デフォルトでは `__str__()` が名前を _姓_、_名_ の順で返すように指定されています。`get_absolute_url()` メソッドは、`author-detail` の URL マッピングを逆にして、個々の著者を表示するための URL を取得します。

## データベースのマイグレーションを再実行

これで、すべてのモデルが作成されました。次に、データベース移行を再実行して、それらをデータベースに追加してください。

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## Language モデル — challenge

ある地元の支援者が、別の言語（たとえばペルシア語）で書かれた新刊本を多数寄贈したと想像してみてください。課題は、これらを図書館のウェブサイト上でどのように表現するのが最適かを検討し、その表現に基づいてモデルに追加することです。

考慮すべき点は以下の通りです。

- 「言語」は、`Book`、`BookInstance`、それともその他のオブジェクトに関連付けるべきでしょうか？
- さまざまな言語は、モデル、自由入力フィールド、それともハードコードされた選択リストのいずれを用いて表現すべきでしょうか？

決定したら、フィールドを追加してください。[GitHub 上のプロジェクト](https://github.com/mdn/django-locallibrary-tutorial/blob/main/catalog/models.py)で、私たちがどのような決定をしたかを確認できます。

モデルに変更を加えた後は、その変更を反映させるために、データベースのマイグレーションを再度実行する必要があることを忘れないでください。

```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

## まとめ

この記事では、モデルの定義方法について学び、その知識を活用して _LocalLibrary_ ウェブサイトに適したモデルを設計・実装しました。

ここで、サイトの作成から少し離れて、_Django 管理サイト_ について確認してみましょう。このサイトを使えば、図書館にデータを追加することができ、そのデータを（まだ作成していない）ビューやテンプレートを使って表示することができます。

## 関連情報

- [はじめての Django アプリ作成、その 2](https://docs.djangoproject.com/ja/5.0/intro/tutorial02/) (Django docs)
- [クエリを作成する](https://docs.djangoproject.com/ja/5.0/topics/db/queries/) (Django Docs)
- [QuerySet API リファレンス](https://docs.djangoproject.com/ja/5.0/ref/models/querysets/) (Django Docs)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django/Admin_site", "Learn_web_development/Extensions/Server-side/Django")}}
