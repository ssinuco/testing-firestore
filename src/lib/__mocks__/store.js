export const getFirestore = () => {}
export const query = () => {}
export const collection = () => {}

export const getDocs = () => {

  return Promise.resolve(
    [
      {
        data: () => {
          return {
            title: 'X',
            description: 'Y'
          }
        }
      },
    ]
  );
}