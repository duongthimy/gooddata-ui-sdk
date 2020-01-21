// (C) 2019-2020 GoodData Corporation
import { objectRefValue, ObjRef, ObjRefInScope, areObjRefsEqual } from "../index";

describe("objectRefValue", () => {
    const Scenarios: Array<[string, ObjRef, string | undefined]> = [
        ["return uri for UriRef", { uri: "/uri" }, "/uri"],
        ["return identifier of IdentifierRef", { identifier: "id" }, "id"],
    ];

    it.each(Scenarios)("should %s", (_desc, input, expected) => {
        expect(objectRefValue(input)).toEqual(expected);
    });

    it("should throw if input null", () => {
        // @ts-ignore
        expect(() => objectRefValue(null)).toThrow();
    });

    it("should throw if input undefined", () => {
        // @ts-ignore
        expect(() => objectRefValue(undefined)).toThrow();
    });
});

describe("areObjRefsEqual", () => {
    const Scenarios: Array<[
        boolean,
        string,
        ObjRefInScope | null | undefined,
        ObjRefInScope | null | undefined,
    ]> = [
        // same type
        [true, "uri, uri, same value", { uri: "/uri" }, { uri: "/uri" }],
        [false, "uri, uri, different value", { uri: "/uri1" }, { uri: "/uri2" }],
        [
            true,
            "identifier, identifier, same value",
            { identifier: "/identifier" },
            { identifier: "/identifier" },
        ],
        [
            false,
            "identifier, identifier, different value",
            { identifier: "/identifier1" },
            { identifier: "/identifier2" },
        ],
        [
            true,
            "localIdentifier, localIdentifier, same value",
            { localIdentifier: "/localIdentifier" },
            { localIdentifier: "/localIdentifier" },
        ],
        [
            false,
            "localIdentifier, localIdentifier, different value",
            { localIdentifier: "/localIdentifier1" },
            { localIdentifier: "/localIdentifier2" },
        ],
        // different types
        [false, "identifier, uri, same value", { identifier: "foo" }, { uri: "foo" }],
        [false, "identifier, uri, different value", { identifier: "foo" }, { uri: "/foo/bar" }],
        [false, "localIdentifier, uri, same value", { localIdentifier: "foo" }, { uri: "foo" }],
        [false, "localIdentifier, uri, different value", { localIdentifier: "foo" }, { uri: "/foo/bar" }],
        [false, "identifier, localIdentifier, same value", { identifier: "foo" }, { localIdentifier: "foo" }],
        [
            false,
            "identifier, localIdentifier, different value",
            { identifier: "foo" },
            { localIdentifier: "bar" },
        ],
        // both nullish
        [true, "null, null", null, null],
        [true, "undefined, undefined", undefined, undefined],
        [true, "null, undefined", null, undefined],
        // nullish and non-nullish
        [false, "null, uri", null, { uri: "foo" }],
        [false, "undefined, identifier", undefined, { identifier: "foo" }],
    ];

    it.each(Scenarios)("should return %s for ", (expected, _desc, a, b) => {
        expect(areObjRefsEqual(a, b)).toEqual(expected);
    });
});