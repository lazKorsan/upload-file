@Student @US001StLoginTestTC01
  Feature: Bir kullanici olarak siteye kaydoldugum email ve password bilgilerimle login olabilmek istiyorum.
    @US001StLoginTestTC01
    Scenario: Login formuna gecerli bilgiler girilip Login butonuna tiklandiginda sisteme giris yapilabilmeli.
      * Student kullanicisi "BASE_URL" sayfasina gider
      * Student kullanicisi "STUDENT_MAIL" ve "STUDENT_PASSWORD" degerleri ile siteye giris yapar
      * Student kullanicisi "panel" sayfasinda oldugunu dogrular
