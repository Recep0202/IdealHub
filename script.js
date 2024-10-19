document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Form verilerini alma
    const productName = document.getElementById('productName').value;
    const productFeatures = document.getElementById('productFeatures').value;

    // SEO için başlık, açıklama ve etiketler oluşturma
    const title = `En İyi ${productName} | Özellikleri ile ${productName}`;
    const description = `${productName} hakkında detaylı bilgiler. Özellikler: ${productFeatures}`;
    const tags = `${productName}, ${productFeatures.split(",").join(", ")}, Etsy, SEO`;

    // Sonuçları gösterme
    document.getElementById('titleResult').textContent = title;
    document.getElementById('descriptionResult').textContent = description;
    document.getElementById('tagsResult').textContent = tags;

    // Sonuç bölümünü görünür yapma
    document.getElementById('results').classList.remove('hidden');
});
