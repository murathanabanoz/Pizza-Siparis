Bu uygulama, kullanıcıların online ortamda pizza siparişi vermelerini sağlayan modern ve kullanıcı dostu bir platformdur. React.js ile geliştirilmiş olan bu uygulama, kullanıcıların çeşitli pizza boyutları, malzemeler ve özelleştirmeler ile siparişlerini kolayca oluşturmasına olanak tanır. Kullanıcılar, istedikleri pizzayı seçebilir, pizza boyutunu belirleyebilir, çeşitli malzemeleri ekleyip çıkarabilir, siparişlerini özelleştirebilir ve sonrasında sipariş özetini görüntüleyerek onay verebilirler.

Uygulama Özellikleri
1. Kullanıcı Dostu Arayüz
Uygulama, basit ve sezgisel bir arayüz ile tasarlanmıştır. Kullanıcılar, pizza sipariş sürecinde kolayca gezinebilir, seçimler yapabilir ve siparişlerini özelleştirebilir.

2. Pizza Boyutu Seçimi
Kullanıcılar, pizza boyutunu seçebilir. Farklı seçenekler sunulur:

Küçük (Personal)
Orta (Medium)
Büyük (Large)
3. Malzeme Seçimi ve Özelleştirme
Pizza malzemeleri seçilebilir. Kullanıcılar, diledikleri malzemeleri seçerek siparişlerini kişiselleştirebilir. Seçilebilecek malzemeler şunları içerebilir:

Peynir
Sucuk
Mantar
Zeytin
Domates
Biber
Ve daha fazlası…
Ayrıca, kullanıcılar istedikleri malzemeleri çıkarabilir veya değiştirebilir.

4. Sipariş Özeti ve Onayı
Kullanıcılar, siparişlerini tamamladıktan sonra, siparişlerinin bir özeti ve toplam maliyeti gösterilir. Bu özet, pizza boyutunu, seçilen malzemeleri ve toplam tutarı içerir. Sipariş onaylandıktan sonra, kullanıcılara siparişin başarıyla alındığına dair bir bildirim verilir.

5. Responsive Tasarım
Uygulama, tüm cihazlarda (masaüstü, tablet, mobil) düzgün çalışacak şekilde responsive tasarıma sahiptir. Kullanıcılar, cihazlarının ekran boyutuna göre rahatça sipariş verebilir.

6. Hızlı Performans
Uygulama, hızlı yükleme süreleri ve akıcı bir kullanıcı deneyimi sunmak için optimize edilmiştir. Vite gibi hızlı bir geliştirme aracı kullanılarak, kullanıcıların bekleme süresi minimize edilmiştir.

Teknolojiler
Bu proje, aşağıdaki teknolojilerle geliştirilmiştir:

React.js: Kullanıcı arayüzü ve bileşen yönetimi için.
Vite: Hızlı geliştirme sunucusu ve paketleme aracı.
CSS: Uygulamanın stil ve düzenini oluşturmak için.
Axios (isteğe bağlı): API çağrıları ve dış veri entegrasyonu için (API entegrasyonu gerektiğinde).
Başlangıç
Gereksinimler
Node.js (LTS versiyonu önerilir)
npm veya yarn (bağımlılık yönetimi için)
Kurulum Adımları
Projeyi Klonlayın:

bash
Kodu kopyala
git clone https://github.com/kullanici-adi/pizza-siparisi.git
Proje Dizinine Geçin:

bash
Kodu kopyala
cd pizza-siparisi
Bağımlılıkları Yükleyin:

bash
Kodu kopyala
npm install
# veya
yarn install
Geliştirme Sunucusunu Başlatın:

bash
Kodu kopyala
npm run dev
# veya
yarn dev
Uygulamayı Tarayıcıda Görüntüleyin:

Tarayıcınızda şu adresi açın: http://localhost:3000

Uygulama Yapısı
/src: Tüm kaynak dosyalarını içerir.
/components: Sipariş formu, pizza seçimi, malzeme ekleme bileşenleri gibi React bileşenleri.
/services: API entegrasyonu ve dış veri işlemleri (isteğe bağlı).
/styles: Uygulamanın genel stil ve düzenlemeleri.
/utils: Yardımcı fonksiyonlar ve uygulama genelindeki veri işleme işlevleri.
Uygulama Adımları
Pizza Boyutunu Seçin: Kullanıcılar, "Küçük", "Orta", "Büyük" seçeneklerinden birini seçebilir.
Malzemeleri Seçin: Kullanıcılar, pizza için eklemek istedikleri malzemeleri seçebilir. Seçenekler arasında peynir, sucuk, zeytin gibi malzemeler bulunur.
Siparişi Özelleştirin: Kullanıcılar, malzemeleri ekleyip çıkararak pizzalarını kişiselleştirebilir.
Siparişi Onayla: Seçilen pizza boyutu ve malzemelerle birlikte sipariş özeti görüntülenir. Kullanıcılar siparişlerini onaylayarak tamamlar.
Katkı
Eğer bu projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları takip edin:

Projeyi kendi bilgisayarınıza klonlayın.
Yeni bir branch oluşturun (git checkout -b yeni-feature).
Yapmak istediğiniz değişiklikleri gerçekleştirin.
Değişikliklerinizi commit edin (git commit -am 'Yeni özellik ekledim').
GitHub'a push edin (git push origin yeni-feature).
Pull request oluşturun.
Yeni özellikler, hata düzeltmeleri veya iyileştirmeler önerilerinizi bekliyoruz!

Lisans
Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına göz atabilirsiniz.

