import type { Primitive } from './Primitive';

type PlainValue = Primitive | PlainObject | PlainValue[];

export type PlainObject = {
    [key: string]: PlainValue;
}
