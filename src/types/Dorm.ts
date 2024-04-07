
export interface Dorm {
    id: number;
    name: string;
    address: number;
}

export interface Address {
    id: number;
    street: string;
    city: string;
    state: string;
    zipcode: number;
}

export const dormTable = "dorm_building";
export const addressTable = "dorm_address";