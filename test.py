import os
import openai

openai.api_key = "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"
# openai.api_key = os.getenv("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")
print('Enter the question: ')
question = input()
response = openai.Completion.create(
  model="text-davinci-003",
  prompt=question,
  temperature=0.3,
  max_tokens=60,
  top_p=1.0,
  frequency_penalty=0.0,
  presence_penalty=0.0
)
print(response["choices"][0]["text"])


# response = openai.Image.create(
#   prompt=question,
#   n=1,
#   size="1024x1024"
# )
# image_url = response['data'][0]['url']
# print(image_url)