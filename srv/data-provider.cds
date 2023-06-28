using { API_PRODUCT_SRV } from './external/API_PRODUCT_SRV';

service ProductManagement {
    entity A_Product as projection on API_PRODUCT_SRV.A_Product;
}
