'''
import asyncio

async def main():
    print('Hello ...')
    await asyncio.sleep(1)
    print('... World!')

# Python 3.7+
asyncio.run(main())

'''


data = ['a','b',True, (False,2), {'1': 2}, [1,2],{'2':2},{2,3},0]

a = {
    'int': 0,
    'bool':0,
    'str': 0,
    'list':0,
    'tuple': 0,
    'dict': 0,
    'set': 0,
}
for k in data: 
    if type(k) == int:
        a['int'] += 1
    elif type(k) == bool:
        a['bool'] += 1
    elif type(k) == str:
        a['str'] += 1
    elif type(k) == list:
        a['list'] += 1
    elif type(k) == tuple:
        a['tuple'] += 1
    elif type(k) == dict:
        a['dict'] += 1
    elif type(k) == set:
        a['set'] += 1
print(a)