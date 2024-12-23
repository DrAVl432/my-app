// components/Listing.tsx
import React from 'react';
import '../styles/App.css';

type Item = {
    listing_id: number;
    url?: string; // Теперь это поле опционально и может быть undefined
    MainImage?: { url_570xN?: string }; // Также опционально
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
};

interface ListingProps {
    items: Item[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
    const formatPrice = (price: string = '0', currencyCode: string = 'USD') => {
        let formattedPrice;
        switch (currencyCode) {
            case 'USD':
                formattedPrice = `$${price}`;
                break;
            case 'EUR':
                formattedPrice = `€${price}`;
                break;
            default:
                formattedPrice = `${price} ${currencyCode}`;
                break;
        }
        return formattedPrice;
    };

    const getLevelClass = (quantity: number = 0) => {
        if (quantity <= 10) return 'level-low';
        if (quantity <= 20) return 'level-medium';
        return 'level-high';
    };

    return (
        <div className="item-list">
            {items.map(item => {
                // Деструктуризация с заданными значениями по умолчанию
                const {
                    listing_id,
                    url = '',
                    MainImage = {},
                    title = 'No title available',
                    currency_code = 'USD',
                    price = '0',
                    quantity = 0
                } = item;

                const imageUrl = MainImage.url_570xN || 'default-image-url.png'; // Убедимся в наличии URL

                return (
                    <div className="item" key={listing_id}>
                        <div className="item-image">
                            <a href={url}>
                                <img src={imageUrl} alt={title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">
                                {title.length > 50 ? `${title.slice(0, 50)}…` : title}
                            </p>
                            <p className="item-price">{formatPrice(price, currency_code)}</p>
                            <p className={`item-quantity ${getLevelClass(quantity)}`}>
                                {quantity} left
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Listing;