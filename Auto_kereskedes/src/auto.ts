export interface Autok {
    autok: Autok[]
    total: number
    skip: number
    limit: number
}

export interface Auto {
    id: number;
    marka: string;
    tipus: string;
    uzemanyag: string;
    ulesekszama: number;
    automatavalto: boolean;
}
