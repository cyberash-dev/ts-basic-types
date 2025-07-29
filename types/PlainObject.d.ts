import type { Primitive } from './Primitive';

export type PlainObject = {
    [key: string]: Primitive | PlainObject;
}
