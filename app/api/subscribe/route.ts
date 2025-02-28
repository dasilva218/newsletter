import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER!,
});

export async function POST(request: Request) {

  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const res = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      { email_address: email, status: 'subscribed' }
    )

    return NextResponse.json({ message: "L'adresse email a été inscrite avec succès", data: res }, { status: 201 });


  } catch (error) {   
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }

}