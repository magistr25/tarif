const updatePrice = (selectElement) => {
    const priceElement = selectElement.closest('.card-body').querySelector('.price');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    priceElement.textContent = price + ' руб/' + (selectElement.value === '1' ? 'мес' : 'период');
}
