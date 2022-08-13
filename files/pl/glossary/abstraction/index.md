---
title: Abstrakcja
slug: Glossary/Abstraction
translation_of: Glossary/Abstraction
original_slug: Glossary/Abstrakcja
---
Abstrakcja w {{Glossary("computer programming")}} to sposób na zmniejszenie złożoności i umożliwienie wydajnego projektowania i wdrażania w złożonych systemach oprogramowania. Ukrywa złożoność techniczną systemów za prostszą {{Glossary("API", "APIs")}}.

## Zalety Abstrakcji Danych

- Pomaga użytkownikowi uniknąć pisania kodu niskiego poziomu.
- Unika powielania kodu i zwiększa możliwość ponownego użycia.
- Potrafi samodzielnie zmieniać wewnętrzną implementację klasy bez wpływu na użytkownika.
- Pomaga zwiększyć bezpieczeństwo aplikacji lub programu, ponieważ tylko ważne informacje są dostarczane użytkownikowi.

## Przykład

```cpp
#include <iostream>
using namespace std;

class implementAbstraction {

    private:
        int a, b;

    public:
        // method to set values of
        // private members

        void set(int x, int y) {
            a = x;
            b = y;
        }

        void display() {
            cout<<"a = " <<a << endl;
            cout<<"b = " << b << endl;
        }
};

int main() {
    implementAbstraction obj;
    obj.set(10, 20);
    obj.display();
    return 0;
}
```

## Ucz się więcej

### Wiedza ogólna

- {{interwiki("wikipedia", "Abstraction (computer science)", "Abstraction")}} w Wikipedii.
