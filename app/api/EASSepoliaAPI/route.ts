export const getAttestationsByAttester = async (attesterAddress: string) => {
  try {
    const response = await fetch('https://sepolia.easscan.org/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query Attestations($attester: String!) {
            attestations(
              where: { attester: { equals: $attester } }
            ) {
              id
              attester
              recipient
              refUID
              revocable
              data
              timeCreated
            }
          }
        `,
        variables: {
          attester: attesterAddress,
        },
      }),
    });

    const { data } = await response.json();
    return data.attestations;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};