
export async function createBeneficiary(details) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Basic ${Buffer.from('test_key:test_secret').toString('base64')}`);

    const body = JSON.stringify({
        key: "test_key",
        name: details.name,
        phone: details.phoneNumber,
        email: details.email,
        address: details.address,
        account_number: details.account_number,
        ifsc: details.ifsc,
        hash: "sdf",
    });

    const response = await fetch("https://api.paytring.com/api/v2/payout/beneficiary/create", {
        method: "POST",
        headers,
        body,
        redirect: "follow",
    });

    return response.json();
}


export async function createPayout(details, beneficiaryId, receiptId) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=");
    const body = JSON.stringify({
        key: "test_key",
        pg: "paytring",
        account_number: details.account_number,
        beneficiary_id: beneficiaryId,
        method: "imps",
        amount: details.amount,
        receipt_id: receiptId,
        hash: "sdf",
    });

    const response = await fetch("https://api.paytring.com/api/v2/payout/create", {
        method: "POST",
        headers,
        body,
        redirect: "follow",
    });

    return response.json();
}


export async function fetchPayout(transferId) {

    const headers = new Headers();
    headers.append("REFERER", "localhost");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Basic dGVzdF9rZXk6dGVzdF9zZWNyZXQ=");

    const body = JSON.stringify({
        key: "test_key",
        id: transferId,
        fetch_type: "advance",
        hash: "",
    });

    const response = await fetch("https://api.paytring.com/api/v2/payout/fetch", {
        method: "POST",
        headers,
        body,
        redirect: "follow",
    });

    return response.json();
}