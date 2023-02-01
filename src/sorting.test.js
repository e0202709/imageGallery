import { sortAsc, sortDesc } from './components/Sorting'
const obj = [
    {
        "id": "1",
        "published_at": "2018-12-30T18:06:30Z"
    }, {
        "id": "2",
        "published_at": "2021-05-19T06:33:11Z"
    }, {
        "id": "3",
        "published_at": "2018-02-30T18:06:30Z"
    }
];

const sortedAscObj = [
    {
        "id": "3",
        "published_at": "2018-02-30T18:06:30Z"
    },
    {
        "id": "1",
        "published_at": "2018-12-30T18:06:30Z"
    }, {
        "id": "2",
        "published_at": "2021-05-19T06:33:11Z"
    }
];

const sortedDescObj = [
    {
        "id": "2",
        "published_at": "2021-05-19T06:33:11Z"
    },
    {
        "id": "1",
        "published_at": "2018-12-30T18:06:30Z"

    },

    {
        "id": "3",
        "published_at": "2018-02-30T18:06:30Z"
    }
];

it('sort by ascending function works', () => {
    const sortedByAsc = sortAsc(obj);
    expect(sortedByAsc).toEqual(sortedAscObj);
})


it('sort by descending function works', () => {
    const sortedByDesc = sortDesc(obj);
    expect(sortedByDesc).toEqual(sortedDescObj);
})