# المشاركة في الترجمة

<!-- markdownlint-disable search-replace -->

لبداية، يرجى الاطلاع على [قواعد إدخال التعديلات في MDN](https://github.com/mdn/translated-content/blob/main/CONTRIBUTING.md)، و[معلومات حول ترجمة وثائق MDN](https://github.com/mdn/translated-content/blob/main/docs/README.md)، و[الإرشادات الخاصة بكتابة الوثائق](https://developer.mozilla.org/ru/docs/MDN/Writing_guidelines).

<!-- markdownlint-enable search-replace -->

## استخدام الروابط

### الروابط الداخلية

في الروابط الداخلية لموقع MDN، يجب تعديل اللغة (`en-US` إلى `ar`) مع الاحتفاظ فقط بمسار URL (بدون البروتوكول واسم النطاق) بحيث توجه الروابط إلى الصفحات المحلية المقابلة.

لنأخذ المثال التالي:

```md
If you are new to HTML, CSS, JavaScript, etc., try our [Learn web development](/en-US/docs/Learn) tutorials.
```

عند الترجمة إلى العربية يجب استبدال `en-US` بـ `ar`:

```md
إذا كنت جديدًا في تعلم HTML و CSS و JavaScript، جرب دروسنا في [تعلم تطوير الويب](/ar/docs/Learn).
```

### الروابط الخارجية

عند ترجمة الروابط إلى مواقع خارجية يجب اتباع القواعد التالية:

* إذا كانت الوثيقة لها نسخة محلية، فيجب استبدال الرابط بها، بما في ذلك عنوان الوثيقة ورابط URL (وهذا ينطبق على موارد مثل [ويكيبيديا](https://ar.wikipedia.org/)). إذا كانت النسخة المحلية أقل جودة أو أقدم من النسخة الإنجليزية بحيث تفقد القيمة، يمكن ترك الرابط الأصلي.
* إذا لم توجد نسخة محلية للوثيقة، فاحتفظ بالعنوان الأصلي وترجم النص المحيط فقط. يمكن أيضًا إضافة معلومة عن لغة الوثيقة (مثلاً، `(إنجليزي)`).
* في بعض الحالات من الأفضل في نص الرابط أن يُستخدم وصف للموارد بدلًا من الاسم الأصلي، خاصة إذا كان هناك تلاعب بالكلمات أو اختصارات واضحة فقط باللغة الأصلية.

أمثلة على الروابط الخارجية:

```md
- [Global variable](https://en.wikipedia.org/wiki/Global_variable) on Wikipedia
- [Class-based programming](https://en.wikipedia.org/wiki/Class-based_programming) on Wikipedia
- [FAQ](https://www.chromium.org/blink/developer-faq/) on Blink
```

يجب ترجمتها إلى العربية كالتالي:

```md
- [متغير عام](https://ar.wikipedia.org/wiki/متغير_عام) في ويكيبيديا
- [Class-based programming](https://en.wikipedia.org/wiki/Class-based_programming) في ويكيبيديا (إنجليزي)
- [الأسئلة المتكررة](https://www.chromium.org/blink/developer-faq/) على موقع Blink (إنجليزي)
```

## التوصيات العامة لترجمة المحتوى إلى اللغة العربية

* ترجم أمثلة الشيفرات (تعليقات ومخرجات)، ما عدا الأخطاء.
* عند ترجمة الأسماء الأجنبية اتبع [قواعد النطق العملي](https://ru.wikipedia.org/wiki/).
* لا تترجم أسماء الشركات أو المكتبات.
* لا تترجم الاختصارات (API, DOM, UI).

## المعجم

**يرجى المحافظة على ترتيب المعجم أبجديًا.**

| المصطلح الأصلي      | الترجمة                            |
| ------------------- | ---------------------------------- |
| cache               | ذاكرة مؤقتة (كاش)                  |
| feature             | ميزة (مرادف أقل تفضيلاً: وظيفة)    |
| functionality       | وظيفة (أو حسب السياق: ميزة) \*     |
| general knowledge   | معرفة عامة (عند استخدامه كعنوان)   |
| learn more          | موارد إضافية (عند استخدامه كعنوان) |
| listener            | معالج (حدث)                        |
| note                | ملاحظة                             |
| production          | بيئة الإنتاج                       |
| render(ing)         | عرض، يعرض، عرض (كمصدر)             |
| see also            | انظر أيضًا                         |
| technical reference | مواد تقنية (عند استخدامه كعنوان)   |

\* — يُفضل عند الإمكان تجنب الترجمة الحرفية باستخدام مرادفات أو توضيح أفضل للمعنى.
